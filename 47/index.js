// 문제 : 자연수 뒤집어 배열로 만들기
// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한사항
// n은 10,000,000,000이하의 자연수입니다.

// 나의 풀이 : O(log n)
function solution(n) {
  var answer = [];
  while (n > 0) {
    answer.push(n % 10);
    n = Math.floor(n / 10);
  }
  return answer;
}

// 방법 1: 문자열로 변환 후 배열로 변환
function solution(n) {
  return [...String(n)].reverse().map(Number);
}
