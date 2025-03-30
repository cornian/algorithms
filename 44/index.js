// 문제 : 뒤집힌 문자열
// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// 입출력 예
// my_string	return
// "jaron"	"noraj"
// "bread"	"daerb"
// 입출력 예 설명
// 입출력 예 #1

// my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.
// 입출력 예 #2

// my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.

// ---------------------------- my solution ----------------------------

function solution(my_string) {
  return my_string.split("").reverse().join("");
}

// ---------------------------- cursor solution ----------------------------

// 방법 1: for 루프 사용
function solution2(my_string) {
  let result = "";
  for (let i = my_string.length - 1; i >= 0; i--) {
    result += my_string[i];
  }
  return result;
}

// 방법 2: 재귀 함수 사용
function solution3(my_string) {
  if (my_string.length <= 1) return my_string;
  return solution3(my_string.slice(1)) + my_string[0];
}

// 방법 3: reduce 사용
function solution4(my_string) {
  return my_string.split("").reduce((acc, char) => char + acc, "");
}
