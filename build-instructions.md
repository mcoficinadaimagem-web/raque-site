# Instruções para Hospedagem na Hostgator

## Como fazer upload do seu site na Hostgator

### Passo 1: Gerar os arquivos
1. No seu computador, abra o terminal/prompt de comando
2. Navegue até a pasta do projeto
3. Execute: `npm run build`
4. Isso criará uma pasta `dist` com todos os arquivos prontos

### Passo 2: Upload na Hostgator
1. Acesse o **cPanel** da Hostgator
2. Clique em **"Gerenciador de Arquivos"** (File Manager)
3. Entre na pasta **"public_html"**
4. Selecione todos os arquivos da pasta `dist` do seu projeto
5. Faça upload (arraste e solte ou use o botão Upload)
6. Extraia os arquivos se necessário

### Passo 3: Configurar
- Se seu domínio já está apontado para a Hostgator, o site ficará disponível automaticamente
- Acesse: `seudominio.com.br`

### Estrutura dos arquivos que você vai fazer upload:
```
public_html/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── vite.svg
```

### Dicas importantes:
- Sempre faça backup dos arquivos antigos antes de substituir
- Se der erro 404, verifique se o arquivo index.html está na raiz da public_html
- Para atualizações futuras, substitua todos os arquivos da pasta dist

### Suporte:
Se tiver dúvidas, o suporte da Hostgator pode ajudar com o upload dos arquivos!