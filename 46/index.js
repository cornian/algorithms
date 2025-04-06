// 문제 : 자릿수 더하기
// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수

// 나의 풀이 : O(log n)
function solution(n) {
  let answer = 0;
  let arr = (n + "").split("");
  for (let i = 0; i < arr.length; i++) {
    answer += +arr[i];
  }
  return answer;
}

// 방법 1: reduce 사용
// O(log n)
function solution2(n) {
  return String(n)
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
}

// 방법 2: 나머지 연산 사용 (가장 효율적)
// O(log n)
// n 이 123 이라고 가정하면 3 2 1 순으로 더하고 n 을 10 으로 나누는 방식
function solution3(n) {
  let answer = 0;
  while (n > 0) {
    answer += n % 10;
    n = Math.floor(n / 10);
  }
  return answer;
}

// 모든 방법이 시간 복잡도는 동일하지만 문자열로 변환하는 로직을 사용하지 않기 때문에 제일 효율적이다.
// 높은 수로 갈 수록 차이가 남.
