// 문제 : 약수의 합
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
// 입출력 예
// n	return
// 12	28
// 5	6
// 입출력 예 설명
// 입출력 예 #1
// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.
// 입출력 예 #2
// 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

function solution(n) {
  var answer = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

// 더 효율적인 풀이
function solution2(n) {
  let answer = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      answer += i;
      if (i !== n / i) {
        answer += n / i;
      }
    }
  }
  return answer;
}

// 위는 제곱근을 이용한 풀이다.
// 반복문을 돌면서 n 을 나누어 떨어지는 i만 찾는 것이 아니다.
// 예를 들어 n 이 12고 i 가 2라면 6 도 함께 answer 에 더한다.
// 그러면 i 가 6 이고 곱해지는 2라는 값은 계산하지 않아도 된다.
