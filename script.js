document.addEventListener("DOMContentLoaded", function() {
  var messageInput = document.getElementById("message-input");
  var sendButton = document.getElementById("send-button");
  var chatMessages = document.getElementById("chat-messages");

  sendButton.addEventListener("click", function() {
    var message = messageInput.value;
    if (message.trim() !== "") {
      var messageElement = document.createElement("div");
      messageElement.classList.add("message");
      messageElement.classList.add("sent-message"); // Nova classe para mensagens enviadas
      messageElement.innerText = message;
      chatMessages.appendChild(messageElement);
      messageInput.value = "";
    }
  });

  messageInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault(); // Impede a quebra de linha ao pressionar Enter
      sendButton.click();
    }
  });

  function updateChatHeader(contactId) {
    var chatHeader = document.getElementById("chat-header");
    var contact = document.querySelector(".contact:nth-child(" + contactId + ")");
    var contactInfo = contact.innerHTML;

    chatHeader.innerHTML = contactInfo;

    var selectedContact = document.querySelector(".contact.selected");
    if (selectedContact) {
      selectedContact.classList.remove("selected");
    }

    selectedContact = document.querySelector(".contact:nth-child(" + contactId + ")");
    selectedContact.classList.add("selected");

    var selectedContactName = selectedContact.querySelector(".contact-name").textContent;
    var selectedContactStatus = selectedContact.querySelector(".contact-status").textContent;
    var selectedContactAvatar = selectedContact.querySelector(".contact-avatar").src;

    var chatHeaderName = document.getElementById("chat-header-name");
    chatHeaderName.innerText = selectedContactName;
  }

  // Armazenar mensagem no localStorage(Fazer em banco de dados)
  function armazenarMensagem(mensagem) {
    var mensagensSalvas = JSON.parse(localStorage.getItem('mensagens')) || [];
    mensagensSalvas.push(mensagem);
    localStorage.setItem('mensagens', JSON.stringify(mensagensSalvas));
  }

  // Recupera mensagens do localStorage
  function recuperarMensagens() {
    var mensagensSalvas = JSON.parse(localStorage.getItem('mensagens')) || [];
    return mensagensSalvas;
  }

  // Obtém a referência para o campo de entrada de mensagem
  var messageInput = document.getElementById("message-input");

  // Adiciona um manipulador de evento "input" ao campo de entrada de mensagem
  messageInput.addEventListener("input", function() {
    if (this.value.length > 95) {
      this.value = this.value.slice(0, 95);
    }
  });

  // Obtém a referência para o botão de envio
  var sendButton = document.getElementById("send-button");

  // Adiciona um manipulador de evento "onclick" ao botão de envio
  sendButton.onclick = function() {
    // Obtém o valor do campo de entrada de mensagem
    var messageInputValue = messageInput.value;

    // Verifica se a mensagem ultrapassa o limite de caracteres
    if (messageInputValue.length > 95) {
      alert("A mensagem excede o limite de 95 caracteres!");
    } else {
      // Continua com o código de envio da mensagem
      // ...
    }
  };
});
document.addEventListener("DOMContentLoaded", function() {
  var messageInput = document.getElementById("message-input");
  var sendButton = document.getElementById("send-button");
  var chatMessages = document.getElementById("chat-messages");

  sendButton.addEventListener("click", function() {
    var message = messageInput.value;
    if (message.trim() !== "") {
      var messageElement = document.createElement("div");
      messageElement.classList.add("message");
      messageElement.classList.add("sent-message"); // Nova classe para mensagens enviadas
      messageElement.innerText = message;
      chatMessages.appendChild(messageElement);
      messageInput.value = "";
    }
  });

  messageInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault(); // Impede a quebra de linha ao pressionar Enter
      sendButton.click();
    }
  });

  function updateChatHeader(contactId) {
    var chatHeader = document.getElementById("chat-header");
    var contact = document.querySelector(".contact:nth-child(" + contactId + ")");
    var contactInfo = contact.innerHTML;

    chatHeader.innerHTML = contactInfo;

    var selectedContact = document.querySelector(".contact.selected");
    if (selectedContact) {
      selectedContact.classList.remove("selected");
    }

    selectedContact = document.querySelector(".contact:nth-child(" + contactId + ")");
    selectedContact.classList.add("selected");

    var selectedContactName = selectedContact.querySelector(".contact-name").textContent;
    var selectedContactStatus = selectedContact.querySelector(".contact-status").textContent;
    var selectedContactAvatar = selectedContact.querySelector(".contact-avatar").src;

    var chatHeaderName = document.getElementById("chat-header-name");
    chatHeaderName.innerText = selectedContactName;
  }

  // Armazenar mensagem no localStorage(Fazer em banco de dados)
  function armazenarMensagem(mensagem) {
    var mensagensSalvas = JSON.parse(localStorage.getItem('mensagens')) || [];
    mensagensSalvas.push(mensagem);
    localStorage.setItem('mensagens', JSON.stringify(mensagensSalvas));
  }

  // Recupera mensagens do localStorage
  function recuperarMensagens() {
    var mensagensSalvas = JSON.parse(localStorage.getItem('mensagens')) || [];
    return mensagensSalvas;
  }

  // Obtém a referência para o campo de entrada de mensagem
  var messageInput = document.getElementById("message-input");

  // Adiciona um manipulador de evento "input" ao campo de entrada de mensagem
  messageInput.addEventListener("input", function() {
    if (this.value.length > 95) {
      this.value = this.value.slice(0, 95);
    }
  });

  // Obtém a referência para o botão de envio
  var sendButton = document.getElementById("send-button");

  // Adiciona um manipulador de evento "onclick" ao botão de envio
  sendButton.onclick = function() {
    // Obtém o valor do campo de entrada de mensagem
    var messageInputValue = messageInput.value;

    // Verifica se a mensagem ultrapassa o limite de caracteres
    if (messageInputValue.length > 95) {
      alert("A mensagem excede o limite de 95 caracteres!");
    } else {
      // Continua com o código de envio da mensagem
      // ...
    }
  };

  // Selecionar o primeiro contato como padrão ao carregar a página
  var defaultContact = document.querySelector(".contact:nth-child(1)");
  if (defaultContact) {
    defaultContact.classList.add("selected");

    var defaultContactName = defaultContact.querySelector(".contact-name").textContent;
    var chatHeaderName = document.getElementById("chat-header-name");
    chatHeaderName.innerText = defaultContactName;
  }
});

window.addEventListener('scroll', function() {
  var footer = document.getElementById('footer');
  var scrollPosition = window.scrollY + window.innerHeight;
  var pageHeight = document.documentElement.scrollHeight; // Use scrollHeight para obter a altura completa da página

  if (scrollPosition >= pageHeight) {
    footer.style.display = 'block';
  } else {
    footer.style.display = 'none';
  }
});


// const guiaIcon = document.querySelector('.guia-icon');

// Comentei o ouvinte de evento de rolagem
// window.addEventListener('scroll', () => {
//   // Obtém a posição vertical de rolagem da página
//   const scrollTop = window.scrollY;

//   // Calcula a rotação com base na posição de rolagem
//   let rotationAngle = -scrollTop / 2; // Ajuste o valor para controlar a velocidade

//   // Limita a rotação a 90 graus
//   if (rotationAngle > 90) {
//     rotationAngle = 90;
//   }

//   // Aplica a transformação de rotação horizontal à imagem
//   guiaIcon.style.transform = `rotateY(${rotationAngle}deg)`;
// });

// Texto que você deseja animar
const textToType = "Cadê Meu Pet?";
const typedTitleElement = document.getElementById("typed-title");

// Função para animar o texto letra por letra
function typeText(text, element, interval) {
  let currentIndex = 0;

  function type() {
    if (currentIndex < text.length) {
      element.textContent += text.charAt(currentIndex);
      currentIndex++;
      setTimeout(type, interval);
    }
  }

  // Inicie a animação
  type();
}

document.addEventListener('DOMContentLoaded', function () {
  // Função para exibir a imagem após o upload
  function displayImage() {
    var input = document.getElementById('upload');
    var image = document.getElementById('uploaded-image');
    var fileNameSpan = document.getElementById('file-name');

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        image.src = e.target.result;
        image.style.display = 'block';
      };

      reader.readAsDataURL(input.files[0]);
      fileNameSpan.innerHTML = ' ' + input.files[0].name;
    }
  }// Associar a função de exibição à alteração do input de arquivo
  var uploadInput = document.getElementById('upload');
  uploadInput.addEventListener('change', displayImage);
});

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('form-imagem');
  var uploadInput = document.getElementById('upload');
  var fileNameSpan = document.getElementById('file-name');
  var resultadoIADiv = document.getElementById('resultado-ia');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var file = uploadInput.files[0];
    var formData = new FormData();

    formData.append('imagem', file);

    // Substitua 'https://sua-api.com/analise-imagem' pelo URL real da sua API de análise de imagem
    fetch('https://sua-api.com/analise-imagem', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(result => {
      // Exiba o resultado da IA na página
      resultadoIADiv.innerHTML = `Resultado da IA: ${result.predicao}`;
    })
    .catch(error => console.error('Erro:', error));
  });

  uploadInput.addEventListener('change', function () {
    fileNameSpan.innerHTML = ' ' + uploadInput.files[0].name;
  });
});

function analisarImagem() {
  var uploadInput = document.getElementById('upload');
  var fileNameSpan = document.getElementById('file-name');
  var resultadoIADiv = document.getElementById('resultado-ia');

  var file = uploadInput.files[0];
  var formData = new FormData();

  formData.append('imagem', file);

  // Substitua 'https://sua-api.com/analise-imagem' pelo URL real da sua API de análise de imagem
  fetch('https://sua-api.com/analise-imagem', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(result => {
    // Exiba o resultado da IA na página
    resultadoIADiv.innerHTML = `Resultado da IA: ${result.predicao}`;
  })
  .catch(error => console.error('Erro:', error));
}

document.addEventListener('DOMContentLoaded', function () {
  var uploadInput = document.getElementById('upload');
  var fileNameSpan = document.getElementById('file-name');

  uploadInput.addEventListener('change', function () {
    fileNameSpan.innerHTML = ' ' + uploadInput.files[0].name;
  });
});


// Função para trocar a foto de perfil
function changeProfilePicture() {
  // Implemente a lógica para trocar a foto de perfil aqui.
  alert('Implemente a lógica para trocar a foto de perfil aqui.');
}

// Função para exibir a imagem selecionada
function displayImage() {
  var input = document.getElementById('upload');
  var profileImg = document.getElementById('profile-img');

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      profileImg.src = e.target.result;

      // Salva a imagem de perfil no localStorage
      localStorage.setItem('profileImage', e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

// Função para acionar o clique no botão de upload
function triggerUpload() {
  document.getElementById('upload').click();
}

// Verifica se há uma imagem de perfil salva no localStorage e exibe-a
var savedProfileImage = localStorage.getItem('profileImage');
var profileImg = document.getElementById('profile-img');

if (savedProfileImage) {
  profileImg.src = savedProfileImage;
}

// Função para editar o nome
function editName() {
  var profileName = document.getElementById('profile-name-prof');
  var newName = prompt('Digite o novo nome:', profileName.textContent);

  if (newName !== null) {
    profileName.textContent = newName;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "img/fundodogs.jpg",
    "img/fundoauau.jpg"
    // Adicione mais imagens conforme necessário
  ];
  let currentIndex = 0;
  const headerImagem = document.getElementById("headerImagem");

  function changeImage() {
    headerImagem.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
    setTimeout(changeImage, 5000);
  }

  // Inicia o carrossel
  changeImage();
});

function editName(elementId) {
  var element = document.getElementById(elementId);
  var newValue = prompt('Digite o novo valor:');

  if (newValue !== null) {
      element.textContent = newValue;
  }
}

function toggleProfileOptions() {
  var profileOptions = document.getElementById('profile-options');
  profileOptions.classList.toggle('invisible');
}

function openSettings() {
  alert('Abrir Configurações'); // Implemente sua lógica para abrir as configurações
}

function logout() {
  alert('Sair da Conta'); // Implemente sua lógica para sair da conta
}

function confirmLogout() {
  var confirmation = window.confirm("Tem certeza de que deseja sair da conta?");

  if (confirmation) {
    // Redireciona para a página de início após a confirmação
    window.location.href = "inicio.html";
  }
}

function redirectToConfig() {
  window.location.href = "perfil.html";
}

function toggleProfileOptions() {
  var profileOptions = document.getElementById('profile-options');

  // Verifica se as opções estão visíveis e oculta, ou vice-versa
  if (profileOptions.classList.contains('invisible')) {
    // Mostra as opções
    profileOptions.classList.remove('invisible');
  } else {
    // Esconde as opções
    profileOptions.classList.add('invisible');
  }
}

function redirectToConfig() {
  // Adicione o redirecionamento para a página de configurações
  window.location.href = 'perfil.html';
}

function confirmLogout() {
  var confirmation = window.confirm("Tem certeza de que deseja sair da conta?");

  if (confirmation) {
    // Redireciona para a página de início após a confirmação
    window.location.href = "inicio.html";
  }
}

