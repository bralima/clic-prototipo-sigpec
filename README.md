# CLIC — Protótipo da Página Inicial

Protótipo funcional em **HTML + CSS + JS puros**, pensado para ser facilmente convertido para **PHP** depois.

## 📁 Estrutura

```
clic-prototipo/
├── index.html          → página principal
├── css/style.css       → estilos (variáveis CSS + Flexbox/Grid)
├── js/script.js        → interações leves (só de teste)
└── img/                → coloque aqui as imagens reais depois
```

## 🚀 Como testar no GitHub Pages

1. Crie um repositório no GitHub (ex: `clic-prototipo`).
2. Envie todos os arquivos para o repositório.
3. Vá em **Settings → Pages → Source: main / root** e salve.
4. Em ~1 minuto, sua página estará no ar em `https://SEU-USUARIO.github.io/clic-prototipo/`.

## 🔄 Como converter para PHP depois

O HTML já está preparado com **comentários indicando** onde entram os pedaços dinâmicos.

### Exemplos de conversão:

**Cabeçalho e rodapé (reaproveitamento):**
```php
<?php include 'partes/topo.php'; ?>
<?php include 'partes/rodape.php'; ?>
```

**Notícias (loop no lugar do HTML repetido):**
```php
<?php foreach ($noticias as $noticia): ?>
    <article class="card-noticia">
        <div class="card-noticia__foto"
             style="background-image:url('<?= $noticia['imagem'] ?>')"></div>
        <h3 class="card-noticia__titulo"><?= $noticia['titulo'] ?></h3>
        <a href="noticia.php?id=<?= $noticia['id'] ?>" class="card-noticia__link">
            + Ver Notícia
        </a>
    </article>
<?php endforeach; ?>
```

**Form de busca (o `name="s"` já está pronto para o `$_GET['s']`):**
```php
$termo = $_GET['s'] ?? '';
```

## 🎨 Paleta de cores (variáveis CSS)

Todas as cores estão no topo do `style.css` em `:root`. Para mudar a identidade visual, basta alterar as variáveis:

- `--azul-sigpec: #325FAA`
- `--azul-claro: #6EABFA`
- `--teal: #03989E`
- `--cinza-word: #565555`
- `--laranja: #FFBE5A`
