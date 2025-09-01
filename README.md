# Piano Virtual

Um simulador de piano interativo desenvolvido com HTML, CSS e JavaScript puro, totalmente responsivo e funcional em dispositivos desktop, tablet e mobile.

## 🎹 Funcionalidades

- **Piano Interativo**: 17 teclas (12 brancas e 5 pretas) que reproduzem sons reais de piano
- **Controle de Volume**: Slider para ajustar o volume dos sons
- **Toggle de Teclas**: Opção para mostrar/ocultar as letras nas teclas
- **Suporte a Teclado**: Toque as teclas usando o teclado físico (apenas desktop)
- **Suporte Touch**: Funcionalidade completa em dispositivos touchscreen
- **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela

## 🚀 Como Usar

### Desktop
- **Mouse**: Clique nas teclas do piano
- **Teclado**: Use as teclas físicas correspondentes às letras mostradas no piano
- **Controles**: Ajuste o volume e a visibilidade das teclas usando os controles no cabeçalho

### Mobile/Tablet
- **Toque**: Toque diretamente nas teclas do piano
- **Scroll**: Deslize horizontalmente para acessar todas as teclas
- **Controles**: Use os controles otimizados para toque

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: 
  - Flexbox para layouts responsivos
  - Media queries para diferentes breakpoints
  - Gradientes e transições para visual moderno
  - Custom toggle switch
- **JavaScript ES6+**:
  - Event listeners para mouse, teclado e touch
  - Web Audio API para reprodução de sons
  - Prevenção de zoom indesejado em iOS

## 📁 Estrutura do Projeto

```
piano-virtual/
│
├── index.html
├── src/
│   ├── styles/
│   │   ├── reset.css
│   │   └── main.css
│   ├── scripts/
│   │   └── engine.js
│   └── tunes/
│       ├── a.wav
│       ├── w.wav
│       ├── s.wav
│       └── ... (outros arquivos de áudio)
└── README.md
```

## 🎵 Mapeamento das Teclas

| Tecla do Teclado | Nota | Tipo |
|------------------|------|------|
| A | Dó | Branca |
| W | Dó# | Preta |
| S | Ré | Branca |
| E | Ré# | Preta |
| D | Mi | Branca |
| F | Fá | Branca |
| T | Fá# | Preta |
| G | Sol | Branca |
| Y | Sol# | Preta |
| H | Lá | Branca |
| U | Lá# | Preta |
| J | Si | Branca |
| K | Dó | Branca |
| O | Dó# | Preta |
| L | Ré | Branca |
| P | Ré# | Preta |
| ; | Mi | Branca |

## 📱 Responsividade

### Breakpoints
- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px

### Adaptações por Dispositivo

**Desktop (> 768px)**
- Teclas grandes (70px de largura)
- Layout horizontal completo
- Suporte a teclado físico

**Tablet (481px - 768px)**
- Teclas médias (50px de largura)
- Controles otimizados para toque
- Layout mantém estrutura horizontal

**Mobile (≤ 480px)**
- Teclas pequenas (40px de largura)
- Header reorganizado verticalmente
- Scroll horizontal para navegação
- Controles adaptados para dedos

## 🔧 Instalação e Uso

1. **Clone o repositório**:
   ```bash
   git clone [url-do-repositorio]
   cd piano-virtual
   ```

2. **Adicione os arquivos de áudio**:
   - Coloque os arquivos de áudio (.wav) na pasta `src/tunes/`
   - Nomeie os arquivos conforme as teclas (a.wav, w.wav, s.wav, etc.)

3. **Abra o projeto**:
   - Abra o arquivo `index.html` em qualquer navegador moderno
   - Ou use um servidor local para melhor performance

## 🎯 Recursos Técnicos

### Otimizações Mobile
- Prevenção de zoom duplo-toque no iOS
- Eventos `touchstart` com `passive: false` para melhor responsividade
- Scroll horizontal suave para navegação nas teclas

### Acessibilidade
- Estrutura semântica com HTML5
- Contraste adequado para leitura
- Indicadores visuais claros para interações

### Performance
- Event delegation otimizada
- Transições CSS suaves
- Carregamento de áudio sob demanda

## 🌐 Compatibilidade

- **Navegadores**: Chrome, Firefox, Safari, Edge (versões modernas)
- **Dispositivos**: Desktop, Laptop, Tablet, Smartphone
- **Sistemas**: Windows, macOS, Linux, iOS, Android

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fork o projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📞 Suporte

Se você encontrar algum problema ou tiver sugestões, por favor abra uma issue no repositório.

---

Desenvolvido com ❤️ usando tecnologias web modernas
