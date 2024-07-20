document.addEventListener("DOMContentLoaded", function () {
    let counter = 1;
    const titles = [
        "ﾠPablo Vegetti",
        "ﾠDimitri Payet",
        "ﾠLéo Jardim",
        "ﾠLucas Piton"
    ];
    const descriptions = [
        "Pablo Vegetti, nascido em Santo Domingo em 15 de outubro de 1988, começou sua carreira profissional aos 23 anos no Villa San Carlos, onde foi campeão e artilheiro da Primera B Metropolitana. Passou por Ferro Carril, Gimnasia, Colón e Instituto, antes de se destacar no Belgrano, onde foi artilheiro e fundamental na conquista do título e acesso à elite do Campeonato Argentino. Com 63 gols em 123 partidas, Vegetti se tornou o segundo maior artilheiro da história do clube em competições da AFA. Em 2023, foi contratado pelo Vasco da Gama.",
        "Dimitri Payet, nasceu em 29 de março de 1987 em Saint-Pierre, na Ilha de Reunião. Jogou por clubes como Saint-Pierroise, Le Havre, AS Excelsior, Nantes, Saint-Étienne, Lille e Olympique de Marseille. No West Ham United, de 2015 a 2017, destacou-se com 38 jogos, 12 gols e 14 assistências, sendo eleito o melhor jogador do ano em 2016. Retornou ao Olympique em 2017, consolidando-se como ídolo do time. Em agosto de 2023, Payet chegou ao Vasco da Gama para vestir a camisa 10.",
        "Léo Jardim, nascido em Ribeirão Preto, São Paulo, em 20 de março de 1995, começou sua carreira no Olé Brasil e, em 2012, entrou na base do Grêmio. Destaque nas competições de juniores, foi convocado para a Seleção Sub-20 em 2013. Fez parte do time principal do Grêmio, vencendo a Copa do Brasil em 2016 e a Libertadores em 2017. Transferiu-se para o Rio Ave em 2018 e para o Lille em 2019, com um período de empréstimo no Boavista. Em 2023, foi contratado pelo Vasco da Gama e, em 2024, convocado para a Seleção Brasileira.",
        "Lucas Piton, nasceu em Jundiaí-SP, dia 9 de outubro de 2000, iniciou sua carreira no futsal, destacando-se pelo Corinthians e sendo campeão do Mundial de Clubes de Futsal Sub-18. Optou por migrar para o futebol de campo. Em 2019, estreou pelo time principal do Corinthians e em 2020 integrou o elenco Sub-20, disputando a Copa São Paulo de Futebol Júnior antes de retornar ao time principal e ganhar destaque. No final de 2022, foi anunciado como reforço pelo Vasco da Gama."
    ];

    // URLs dos vídeos correspondentes a cada slide
    const videoSources = [
        'vegetti.mp4', // Vídeo correspondente ao slide 1
        'payet.mp4', // Vídeo correspondente ao slide 2
        'leo.mp4', // Vídeo correspondente ao slide 3
        'piton.mp4'  // Vídeo correspondente ao slide 4
    ];

    const videoElement = document.getElementById('slider-video');
    const playButton = document.getElementById('play-button');
    const playIcon = playButton.querySelector('i'); // Seleciona o ícone dentro do botão

    function updateSlide() {
        document.getElementById('radio' + counter).checked = true;
        document.getElementById('image-title').innerText = titles[counter - 1];
        document.getElementById('image-description').innerText = descriptions[counter - 1];
        updateVideo(counter - 1); // Atualiza o vídeo com base no slide atual
    }

    function updateVideo(index) {
        videoElement.src = videoSources[index];
        videoElement.style.display = 'block'; // Exibe o vídeo
    }

    function nextSlide() {
        counter = (counter % 4) + 1; // Avança para o próximo slide (1 a 4)
        updateSlide();
    }

    function prevSlide() {
        counter = (counter - 2 + 4) % 4 + 1; // Volta para o slide anterior (1 a 4)
        updateSlide();
    }

    function updatePlayButtonIcon() {
        if (videoElement.paused) {
            playIcon.classList.remove('fa-circle-pause');
            playIcon.classList.add('fa-circle-play');
        } else {
            playIcon.classList.remove('fa-circle-play');
            playIcon.classList.add('fa-circle-pause');
        }
    }

    // Adiciona ouvintes de evento aos labels
    const labels = document.querySelectorAll('.manual-navigation .manual-btn');
    labels.forEach((label, index) => {
        label.addEventListener('click', () => {
            counter = index + 1;
            updateSlide();
        });
    });

    // Adiciona evento de clique para o botão de play
    playButton.addEventListener('click', () => {
        if (videoElement.paused) {
            videoElement.play();
        } else {
            videoElement.pause();
        }
        updatePlayButtonIcon(); // Atualiza o ícone do botão de play/pause
    });

    // Atualiza o ícone do botão de play/pause quando o vídeo começa a tocar ou é pausado
    videoElement.addEventListener('play', updatePlayButtonIcon);
    videoElement.addEventListener('pause', updatePlayButtonIcon);

    // Inicializa o slide e o texto
    updateSlide();
});
