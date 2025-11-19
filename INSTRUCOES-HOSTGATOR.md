# 📋 Como Hospedar seu Site na Hostgator

## Passo 1: Gerar os Arquivos do Site

### No seu computador:

1. **Abra o terminal/prompt de comando** na pasta do projeto

2. **Instale as dependências** (só precisa fazer uma vez):
   ```bash
   npm install
   ```

3. **Gere os arquivos otimizados**:
   ```bash
   npm run build
   ```

4. **Resultado**: Uma pasta chamada `dist` será criada com todos os arquivos prontos para upload

---

## Passo 2: Fazer Upload na Hostgator

### No cPanel da Hostgator:

1. **Acesse o cPanel**
   - Entre no painel da Hostgator
   - Faça login com suas credenciais

2. **Abra o Gerenciador de Arquivos**
   - Procure por "Gerenciador de Arquivos" ou "File Manager"
   - Clique para abrir

3. **Vá para a pasta public_html**
   - No lado esquerdo, clique em `public_html`
   - Esta é a pasta raiz do seu site

4. **Limpe a pasta (se necessário)**
   - Se houver arquivos antigos, selecione todos
   - Clique em "Delete" ou "Excluir"
   - ⚠️ **Cuidado**: Faça backup antes se tiver algo importante

5. **Faça o Upload**
   - Clique no botão "Upload" no topo
   - Selecione **TODOS** os arquivos da pasta `dist` do seu computador
   - Aguarde o upload completar (pode demorar alguns minutos)

6. **Importante**: 
   - Faça upload dos **arquivos dentro da pasta dist**, não da pasta dist inteira
   - Deve ficar assim na public_html:
     ```
     public_html/
     ├── index.html
     ├── assets/
     ├── vite.svg
     └── outros arquivos...
     ```

---

## Passo 3: Verificar se Funcionou

1. **Abra seu navegador**
2. **Digite seu domínio**: `seudominio.com.br`
3. **Pronto!** Seu site deve estar no ar 🎉

---

## ⏱️ Quanto tempo demora?

- **Upload**: 2-5 minutos (depende da sua internet)
- **Site no ar**: Imediato após o upload
- **Se não funcionar**: Aguarde até 30 minutos e limpe o cache do navegador (Ctrl+F5)

---

## 🔄 Como Atualizar o Site no Futuro

Sempre que fizer alterações:

1. Edite os arquivos do projeto
2. Rode `npm run build` novamente
3. Faça upload dos novos arquivos da pasta `dist`
4. Substitua os arquivos antigos na Hostgator

---

## ❓ Problemas Comuns

### "Página não encontrada" ou "404"
- Verifique se os arquivos estão na pasta `public_html` (não em subpastas)
- Certifique-se que o arquivo `index.html` está na raiz

### "Site não carrega"
- Limpe o cache do navegador (Ctrl+F5)
- Aguarde 30 minutos para propagação
- Verifique se o domínio está apontado para a Hostgator

### "Imagens não aparecem"
- Certifique-se de fazer upload da pasta `assets` completa
- Verifique se todos os arquivos foram enviados

---

## 📞 Precisa de Ajuda?

- **Suporte Hostgator**: Eles podem te ajudar com questões do cPanel
- **Telefone**: Disponível no site da Hostgator
- **Chat**: Geralmente disponível 24/7

---

## ✅ Checklist Final

Antes de considerar concluído:

- [ ] Pasta `dist` foi gerada com sucesso
- [ ] Todos os arquivos foram enviados para `public_html`
- [ ] Arquivo `index.html` está na raiz de `public_html`
- [ ] Site abre no navegador pelo seu domínio
- [ ] Todas as páginas e imagens carregam corretamente
- [ ] Formulário de contato funciona
- [ ] WhatsApp flutuante funciona

---

**Dica Final**: Sempre mantenha uma cópia dos arquivos originais do projeto no seu computador. Assim você pode fazer alterações e atualizar o site sempre que precisar! 💡
