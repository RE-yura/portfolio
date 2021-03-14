import React, { Component, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { DefaultTemplate } from "../components/templates/DefaultTemplate";
import useNavStore, { NavProvider } from "../store/useNavStore";
import NavStore from "../store/NavStore";
import useMapStore, { MapProvider } from "../store/useMapStore";
import MapStore from "../store/MapStore";
import Top from "../components/organisms/Top";
import Skills from "../components/organisms/Skills";
import Section from "../components/templates/Section";
import Accounts from "../components/organisms/Accounts";
import Works from "../components/organisms/Works";
import About from "../components/organisms/About";
import MapModal from "../components/molecules/MapModal";
import BackDrop from "../components/atoms/BackDrop";
import FrontViewController from "../components/organisms/FrontLayer";
import { FrontView } from "../config/FrontView";
// import { database } from "../service/FirebaseService";
import firebase from "firebase/app";
import "firebase/database";

const MainPage = () => {
  const [setViewers, setNetworkError, frontViewType, setFrontViewType] = useNavStore((store) => [
    store.setViewers,
    store.setNetworkError,
    store.frontViewType,
    store.setFrontViewType,
  ]);
  const [points, setPoints] = useMapStore((store) => [store.points, store.setPoints]);

  const [userId, setUserId] = useState("");
  const [location, setLocation] = useState("unknown");
  const database = firebase.database();

  // ブラウザを閉じる前に自分を閲覧者から削除
  const handlePageHide = (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    // console.log("pagehide");
    database
      .ref("page_views/" + userId)
      .remove()
      .then(function () {
        console.log("Remove succeeded.");
      })
      .catch(function (error) {
        console.log("Remove failed: " + error.message);
      });
  };

  const handleVisiblityChange = (e) => {
    // console.log("visibilityState", document.visibilityState);
    if (document.visibilityState === "hidden") handlePageHide(e);
  };

  function updateDB(viewer_ip) {
    var ip_to_string = viewer_ip.toString();
    for (var i = 0; i < ip_to_string.length; i++) {
      ip_to_string = ip_to_string.replace(".", "-");
    }
    setUserId(ip_to_string);

    database
      .ref()
      .child("page_views/" + ip_to_string)
      .set({
        viewer_ip: viewer_ip,
        timestamp: Math.floor(new Date().getTime() / 1000),
        location: location,
      });
    database
      .ref()
      .child("logs/" + ip_to_string)
      .set({
        viewer_ip: viewer_ip,
        timestamp: Math.floor(new Date().getTime() / 1000),
        location: location,
      });
    database
      .ref()
      .child("page_views")
      .on("value", function (snapshot) {
        const views = snapshot.numChildren() || 0;
        setViewers(views);
        let points_buf = [];
        snapshot.forEach((data) => {
          // console.log("The " + data.key + " score is " + data.val()["location"]);
          if (data.val()["location"] !== "unknown") {
            const lat = Number(data.val()["location"]?.split(",")[0]);
            const lng = Number(data.val()["location"]?.split(",")[1]);
            // console.log(lat, lng);
            points_buf = [...points_buf, { lat: lat, lng: lng }];
          }
        });
        setPoints(points_buf);
      });
  }
  
  // 位置情報取得成功時の処理
  let successCallback = (pos) => {
    setLocation(`${pos.coords.latitude},${pos.coords.longitude}`);
    // console.log(pos);
  };

  // 位置情報取得失敗時の処理
  const failureCallback = (error) => {
    setLocation("unknown");
    console.log(error);
  };

  // === Mount Callback ============================================
  useEffect(() => {
    //ユーザーの現在の位置情報を取得を実行
    navigator.geolocation.getCurrentPosition(successCallback, failureCallback);

    async function getIP() {
      await fetch("https://api.ipify.org/?format=json")
        .then((response) => response.json())
        .then((data) => {
          const viewer_ip = data["ip"];
          updateDB(viewer_ip);
          return data;
        })
        .catch((err) => {
          console.log(err);
          setNetworkError(true);
          return err;
        });
    }
    getIP();
    // console.log("debug3");

    window.addEventListener("pagehide", handlePageHide);
    // document.addEventListener("visibilitychange", handleVisiblityChange);
    return () => {
      window.removeEventListener("pagehide", handlePageHide);
      //   document.removeEventListener("visibilitychange", handleVisiblityChange);
    };
  }, [userId, frontViewType]);

  return (
    <DefaultTemplate>
      <Wrapper>
        {/* ======== TOP Wrapper ========= */}
        <Top />

        {/* ======== Skills ========= */}
        <Section title="Skills" id="skills" padding="90px 0 40px 0">
          <Skills />
        </Section>

        {/* ======== Works ========= */}
        <Section title="Works" id="works" padding="10px 0 0 0">
          <Works />
        </Section>

        {/* ======== About Me ========= */}
        <Section title="Accounts" id="accounts" padding="30px 0 20px 0">
          <Accounts />
        </Section>

        {/* ======== About Me ========= */}
        <Section title="About Me" id="about" padding="20px 0 30px 0">
          <About />
        </Section>
      </Wrapper>
      {!!frontViewType && (
        <BackDrop
          visible={true}
          clickHandler={() => {
            setFrontViewType(FrontView.None);
          }}
        />
      )}
      {!!frontViewType && <FrontViewController viewType={frontViewType} />}
    </DefaultTemplate>
  );
};

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const Home = () => {
  const navStore = new NavStore();
  const mapStore = new MapStore();
  return (
    <NavProvider value={navStore}>
      <MapProvider value={mapStore}>
        <MainPage />
      </MapProvider>
    </NavProvider>
  );
};

export default Home;
