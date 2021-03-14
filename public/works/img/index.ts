const WorksImgs = [
  {
    fname: "portfolio.png",
    title: "ポートフォリオ",
    des:
      "当ページです．React+Next+MobX+Atomic Design(風?)+Firebaseで作っています．閲覧人数のリアルタイム表示&閲覧者の位置をマップ上で確認できるという謎機能があります．\nスマホでも見れます．個人的にスマホの動画再生形式は全画面よりインラインが好きです．(場合によるが)",
    url: "https://github.com/RE-yura/portfolio",
  },
  {
    fname: "bachelor.png",
    title: "電磁力による力覚提示が可能な非接触遭遇型ハプティックインターフェース",
    des:
      "卒論です．(闇の教育改革により4ヶ月で先行研究調査･設計･組立･制御ソフト作成･実験･論文執筆･発表までやりました...)\n何度読み返しても当時の辛さが伝わってくるので是非読んでみて下さい．",
    url: "/works/bachelor.pdf",
  },
  {
    fname: "master.png",
    title: "手術ロボットのマスタ(外科医が操作するコントローラ的なもの)",
    des:
      "前述の通り卒論が4ヶ月で終わったので，残り半年以上の期間を使って作りました．今まで作ってきたロボットとは設計･制御とも桁違いに難しく，日々頭を悩ませる良い経験でした．",
  },
  {
    fname: "yal.png",
    title: "Yal (ロボット制御用C++ライブラリ)",
    des:
      "ロボット制御プログラムにはフィルタ計算や通信(プロセス間･端末間)などが何度も登場します．それらを各ロボットごとに書くのは非効率な上にソースの可読性も落ちるので，ライブラリ化しました．git clone && cmake && make && make installで環境が整うのでロボット制御の際には是非お試しを．",
    url: "https://github.com/RE-yura/yal",
  },
  {
    fname: "number_magic.png",
    title: "数字マジック",
    des:
      "まず1〜1000の中から好きな数字を選んでください．選んだ数字が表示される数字列にあれば｢ある｣ボタンを，なければ｢ない｣ボタンを押します．何回か答えると，最初に選んだ数字を当ててくれます．\n時々こういうくだらないもの作りたくなりませんか?? いや，なる．",
    url: "https://github.com/RE-yura/number_magic",
  },
  {
    fname: "face_prediction.png",
    title: "顔認識デモソフト",
    des:
      "600行弱程度のソースで顔画像データの収集･学習･推論とGUIが動きます．勤怠管理システムとかに応用できそう?? 昔Keras + tkinterで作ったのですが，トレンド的に?PyTorch + Qtで作り直しました．\n今や機械学習を多少知らないと恥ずかしい時代?? 僕もあまり精通してないので，綺麗な実装ではないかもですが，勉強したい人のきっかけにでもなれば嬉しいです．",
    url: "https://github.com/RE-yura/attendance_manager",
  },
  {
    fname: "HAR.png",
    title: "Human Activity Recognition",
    des:
      "HAR ( Human Activity Recognition : 人間行動認識 )とは，カメラやセンサなどの様々な機器から得られた情報をもとに，人間の行動を学習･推定する認識技術分野のことです．\nリンク先のリポジトリには，スマホのIMU情報(姿勢･重力･角速度･ユーザの加速度)をもとにユーザの行動を予測するスクリプトが置いてあります．pytorchやsklearnを用いて実装されていて，他のデータ分析にも応用できるはずです．",
    url: "https://github.com/RE-yura/HAR",
  },
];

export default WorksImgs;
