function signUp(event) {
  event.preventDefault(); // 폼 제출을 막음

  let ID = document.getElementById('id').value;
  let password = document.getElementById('password').value;
  let passwordCheck = document.getElementById('passwordCheck').value;
  let name = document.getElementById('name').value;
  let birth = document.getElementById('birth').value;
  let telephone = document.getElementById('telephone').value;
  let address = document.getElementById('address').value;
  let email = document.getElementById('email').value;
  let agree = document.getElementById('agree').checked;
  let check = true;

  // 아이디 확인
  if (ID === '') {
    document.getElementById('idError').innerHTML = '아이디를 입력해 주세요.';
    check = false;
  } else {
    document.getElementById('idError').innerHTML = '';
  }

  // 비밀번호 확인
  if (password !== passwordCheck) {
    document.getElementById('passwordError').innerHTML = '';
    document.getElementById('passwordCheckError').innerHTML =
      '비밀번호가 동일하지 않습니다.';
    check = false;
  } else {
    document.getElementById('passwordError').innerHTML = '';
    document.getElementById('passwordCheckError').innerHTML = '';
  }

  if (password === '') {
    document.getElementById('passwordError').innerHTML =
      '비밀번호를 입력해주세요.';
    check = false;
  }

  if (passwordCheck === '') {
    document.getElementById('passwordCheckError').innerHTML =
      '비밀번호를 다시 입력해주세요.';
    check = false;
  }

  // 이름 확인
  if (name === '') {
    document.getElementById('nameError').innerText = '이름을 입력해 주세요.';
    check = false;
  } else {
    document.getElementById('nameError').innerText = '';
  }

  // 생년월일 확인
  if (birth === '' || birth.length !== 8 || isNaN(birth)) {
    document.getElementById('birthError').innerHTML =
      '생년월일을 8자리 숫자로 입력해 주세요.';
    check = false;
  } else {
    let year = parseInt(birth.substring(0, 4));
    let month = parseInt(birth.substring(4, 6));
    let day = parseInt(birth.substring(6, 8));
    let currentYear = new Date().getFullYear();

    if (year > currentYear) {
      document.getElementById('birthError').innerHTML =
        '올바른 년도가 아닙니다.';
      check = false;
    } else if (month < 1 || month > 12) {
      document.getElementById('birthError').innerHTML = '올바른 월이 아닙니다.';
      check = false;
    } else {
      let daysInMonth = new Date(year, month, 0).getDate();
      if (day < 1 || day > daysInMonth) {
        document.getElementById('birthError').innerHTML =
          '올바른 일이 아닙니다.';
        check = false;
      } else {
        document.getElementById('birthError').innerHTML = '';
      }
    }
  }

  // 전화번호 확인
  if (telephone === '') {
    document.getElementById('telephoneError').innerHTML =
      '전화번호를 입력해 주세요.';
    check = false;
  } else if (isNaN(telephone)) {
    document.getElementById('telephoneError').innerHTML =
      '올바른 전화번호 형식이 아닙니다.';
    check = false;
  } else {
    document.getElementById('telephoneError').innerHTML = '';
  }

  // 주소 확인
  if (address === '') {
    document.getElementById('addressError').innerHTML = '주소를 입력해 주세요.';
    check = false;
  } else {
    document.getElementById('addressError').innerHTML = '';
  }

  // 이메일 확인
  if (email.includes('@')) {
    let emailId = email.split('@')[0];
    let emailServer = email.split('@')[1];
    if (emailId === '' || emailServer === '') {
      document.getElementById('emailError').innerHTML =
        '이메일이 올바르지 않습니다.';
      check = false;
    } else {
      document.getElementById('emailError').innerHTML = '';
    }
  } else {
    document.getElementById('emailError').innerHTML =
      '이메일이 올바르지 않습니다.';
    check = false;
  }

  // 개인정보 활용 동의 확인
  if (!agree) {
    document.getElementById('agreeError').innerHTML =
      '개인정보활용에 동의해주세요.';
    check = false;
  } else {
    document.getElementById('agreeError').innerHTML = '';
  }

  if (check) {
    alert('가입이 완료되었습니다.');
    // 가입 완료 후 추가 작업을 여기에 추가합니다.
  }
}
