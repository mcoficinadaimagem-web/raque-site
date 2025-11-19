# 🎨 Guia de Personalização - Site Raquel Martins

## 📱 Como Alterar Seus Dados

### 1. TELEFONE E WHATSAPP

**Localize no arquivo:** `src/pages/home/page.tsx`

**Procure por estas linhas:**
```
https://wa.me/5511999999999
(11) 99999-9999
```

**Substitua por seu número:**
- Formato WhatsApp: https://wa.me/55**SEUDDD****SEUNUMERO**
- Formato exibição: (**SEUDDD**) *****-****

**Exemplo:**
- Se seu número é (21) 98765-4321
- WhatsApp: https://wa.me/5521987654321
- Exibição: (21) 98765-4321

### 2. E-MAIL

**Procure por:**
```
contato@raquelmartins.com
mailto:contato@raquelmartins.com
```

**Substitua por seu e-mail:**
```
seuemail@dominio.com
mailto:seuemail@dominio.com
```

### 3. INSTAGRAM

**Procure por:**
```
@raquelmartins.organizacao
https://instagram.com/raquelmartins.organizacao
```

**Substitua por seu usuário:**
```
@seuusuario
https://instagram.com/seuusuario
```

### 4. NOME E TÍTULO

**Procure por:**
```
Raquel Martins
```

**Substitua por seu nome em todos os lugares**

### 5. HORÁRIOS DE ATENDIMENTO

**Procure pela seção:**
```html
<h4 className="font-bold text-[#37332F] mb-3">Horário de Atendimento</h4>
<div className="space-y-2 text-[#37332F]">
  <p><strong>Segunda a Sexta:</strong> 8h às 18h</p>
  <p><strong>Sábado:</strong> 9h às 15h</p>
  <p><strong>Domingo:</strong> Fechado</p>
</div>
```

**Altere conforme seus horários**

### 6. ÁREA DE ATUAÇÃO

**Procure por:**
```
São Paulo, SP, Brasil
```

**Substitua por sua cidade/região**

## 📝 Alterando Conteúdo

### SOBRE VOCÊ
Procure pela seção "Sobre a Raquel" e altere:
- Tempo de experiência
- Formação
- Especialidades
- Números de projetos

### SERVIÇOS
Na seção "Nossos Serviços", você pode:
- Alterar tipos de ambientes
- Modificar descrições
- Ajustar preços (se quiser incluir)

### DEPOIMENTOS
Substitua os depoimentos pelos seus clientes reais:
- Nomes dos clientes
- Profissões
- Textos dos depoimentos
- Fotos (se tiver)

## 🚀 Fazendo as Alterações

### Passo 1: Encontre o arquivo
- Abra: `src/pages/home/page.tsx`

### Passo 2: Use Ctrl+F para buscar
- Procure pelos textos que quer alterar
- Use as palavras-chave deste guia

### Passo 3: Substitua com cuidado
- Mantenha as aspas ""
- Não altere o código, só os textos
- Mantenha a formatação

### Passo 4: Salve e teste
- Salve o arquivo
- Teste se não quebrou nada

## ⚠️ IMPORTANTE

### ✅ O QUE PODE ALTERAR:
- Textos dentro de aspas ""
- Números de telefone
- E-mails
- Links do Instagram
- Horários
- Nomes
- Descrições

### ❌ O QUE NÃO DEVE ALTERAR:
- Código JavaScript
- Classes CSS (className="...")
- Estrutura HTML
- Imports no início do arquivo

## 📞 Assistente de Agendamento

Seu site já inclui o Readdy Agent - um assistente que permite aos clientes:
- Agendar consultas por voz ou chat
- Fazer perguntas sobre seus serviços
- Obter informações automaticamente

**Para configurar:**
- Use <action>calendar_setup</action> para configurar sua agenda
- Use <action>readdy_agent_prompt_settings</action> para personalizar as respostas

## 💡 Dicas Importantes

1. **Sempre faça backup** antes de alterar
2. **Teste localmente** antes de publicar
3. **Altere uma coisa por vez** para não se confundir
4. **Use Ctrl+Z** para desfazer se errar
5. **Mantenha os links funcionando** (WhatsApp, Instagram, e-mail)

## 🆘 Se Algo Der Errado

Se o site parar de funcionar:
1. Use Ctrl+Z para desfazer
2. Verifique se não apagou aspas ""
3. Procure por erros de digitação
4. Compare com o arquivo original

**Lembre-se:** Você só precisa alterar os textos, não mexer no código!