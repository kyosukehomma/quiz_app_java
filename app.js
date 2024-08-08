// const は定数宣言, 後から別の値を格納することはできない.
// $ の使い方には宗派があるようだが, ここではオブジェクトの場合に $ を付与する.
const $win = window;                                    
const $doc = document;                                  // HTMLドキュメント
const $qestion = $doc.getElementById('js-question');    // HTMLオブジェクト 問題文
const $button = $doc.getElementsByTagName('button');    // HTMLオブジェクト 選択肢(配列)

// quiz_arr配列に {問題文, 選択肢, 解答} オブジェクトを格納する
const quiz_arr = [
    {
        question: '変数の宣言方法として誤っているものを一つ選びなさい。',
        answers: ['boolean flg-exist;', 'String $name;', 'double interest_rate;', 'int number, length;' ],
        correct: 'boolean flg-exist;'
    }, {
        question: 'Javaに関する説明として誤っているものを一つ選びなさい。',
        answers: ['ガベージコレクションにより確保する必要がないメモリ領域が自動的に解放される。', 'プログラマは明示的にメモリ解放を行う必要がない。', 'コンパクションとは、ガベージコレクタが使用中のメモリ領域を整理して効率化することである。', 'メモリアドレスであるポインタを用いてメモリを操作することができる。' ],
        correct: 'メモリアドレスであるポインタを用いてメモリを操作することができる。'
    }, {
        question: 'クラスの名前として適切なものを一つ選びなさい。',
        answers: ['$StudentList', 'Student-List', '%StudentList', '1StudentList' ],
        correct: '$StudentList'
    }, {
        question: 'カプセル化の説明として、正しいものを一つ選びなさい。',
        answers: ['同種の異なるインスタンスを同じ型として扱う', '関係するものをひとまとめにする', '公開すべきものと非公開にすべきものを区別して扱う', 'クラスのフィールドを隠蔽し、他のクラスからは直接使えないようにする' ],
        correct: '関係するものをひとまとめにする'
    }, {
        question: 'サブクラスでスーパークラスのメソッドを再定義することを何と呼ぶか。正しいものを一つ選びなさい。',
        answers: ['カプセル化', 'ポリモーフィズム', 'オーバーライド', 'オーバーロード' ],
        correct: 'オーバーライド'
    }
]

// 変数宣言
let quiz_index = 0; // クイズ進行カウンター
let score = 0;      // 正解数カウンター

// ***************************************************************************************************
// 名前: setup_quiz
// 機能: クイズの問題文・選択肢を関数として定義
// 引数: なし
// 返値: なし
// ***************************************************************************************************
const setup_quiz = () => {

    // id="js-question" のテキストに question定数 を格納する
    $doc.getElementById('js-question').textContent = quiz_arr[quiz_index].question;
    
    // ボタンに選択肢を格納するループ
    let button_index = 0;  // カウンター初期値
    while(button_index < $button.length){
        $button[button_index].textContent = quiz_arr[quiz_index].answers[button_index];
        button_index++;    // カウントアップ
    }
};

// 関数を呼び出す: 最初のクイズを設定する
setup_quiz();

// ***************************************************************************************************
// 名前: click_handler
// 機能: イベントターゲットの文字列が正解か否か確認, クイズ進行カウンターを加算, 全問終了したか否か確認する
// 引数: Arg1 = イベントオブジェクト
// 返値: なし
// ***************************************************************************************************
const click_handler = (e) => {
    
    if(quiz_arr[quiz_index].correct === e.target.textContent){   
        $win.alert('正解！');
        score++;
    } else {
        $win.alert('不正解！');
    }

    quiz_index++;

    if(quiz_index < quiz_arr.length){
    } else {   
        // 問題がもう無い場合
        $win.alert('終了！ 正解数: ' + score + '/' + quiz_arr.length)
        quiz_index = 0;
        score = 0;
    }
    setup_quiz();
};

// ボタン配列に対してループ
let button_index = 0;  // カウンター初期値
while (button_index < $button.length){

    // ボタンをクリックしたら click_handler関数 を実行する
    $button[button_index].addEventListener('click', (e) => {
        click_handler(e);
    });
    button_index++;    // カウントアップ
};


//----------------------------------------<< End of Source >>----------------------------------------