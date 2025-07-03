document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-btn');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    } else {
        console.error("Elementos do menu não encontrados!");
    }
});

// Efeito para o botão de orçamento
const orcamentoBtn = document.querySelector('.orcamento-btn');

if (orcamentoBtn) {
    orcamentoBtn.addEventListener('click', function () {
        const btn = this;
        const originalHTML = btn.innerHTML;

        // Animação de clique
        btn.classList.add('clicked');

        // Feedback visual
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';

        // Simulação de envio
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Enviado!';
            btn.style.background = "linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)";

            // Reset após 3 segundos
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = "linear-gradient(135deg, #594821 0%, #8a6d3b 100%)";
                btn.classList.remove('clicked');
            }, 3000);
        }, 1500);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Adiciona a classe 'active' ao botão clicado
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Filtra os itens do portfólio
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 400);
                }
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Destacar o primeiro item inicialmente
    portfolioItems[0].classList.add('active');

    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            // Remover destaque de todos os itens
            portfolioItems.forEach(i => {
                i.classList.remove('active');
            });

            // Aplicar destaque ao item atual
            this.classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const depoimentos = document.querySelectorAll('.depoimento');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let index = 0;

    function showDepoimento(i) {
        depoimentos.forEach(d => d.classList.remove('active'));
        depoimentos[i].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % depoimentos.length;
        showDepoimento(index);
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + depoimentos.length) % depoimentos.length;
        showDepoimento(index);
    });

    // Auto troca a cada 6s
    setInterval(() => {
        index = (index + 1) % depoimentos.length;
        showDepoimento(index);
    }, 6000);
});
let lastScroll = 0;

