# opcua-monitor-frontend

Repositório para código fonte da aplicação front-end do projeto OPC-UA Monitor.

<br>

Passo a passo para instalação em uma máquina virtual na plataforma Microsoft Azure:

<sub>Se já existe uma máquina virtual Ubuntu na Azure preparada, inicie clonando o repositório</sub>

### Criação de um resource group

Entre no portal Azure e crie um Resource Group

### Criação de uma máquina virtual

Crie uma Máquina Virtual Ubuntu 20.04 na Azure alterando as seguintes especificações:

- Availability options: No insfrastructure redundancy required
- Image: Ubuntu Server 20.04 LTS
- Select inbound ports: 80 (HTTP)

Durante o processo faça o download da chave ssh.

### Acesso à máquina virtual

Abra um terminal e acesse a máquina virtual criada alterando o inserindo o IP público da máquina:

```
  ssh -i ~/Downloads/OpcuaMonitorVM_key.pem azureuser@IP_PÙBLICO
```

### Preparação do servidor

- Instale o Node.js

```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```
```
sudo apt-get install -y nodejs
```
###

- Instale o yarn

```
sudo npm install yarn -g
```

### Instalação do front-end

- Clone o repositório

```
git clone https://github.com/RicardoGMiguel/opcua-monitor-frontend.git
```

###

- Instale as dependências e gere os arquivos de produção

```
cd opcua-monitor-frontend
```
```
yarn
```
```
yarn build
```
```
cd
```

###

- Instale o nginx

```
sudo apt update
```
```
sudo apt install nginx
```

### Configuração do nginx

- Copie o conteúdo do diretório build para um nova diretório
 
```
sudo mkdir /var/www/html/react
```
```
sudo cp -r opcua-monitor-frontend/build/* /var/www/html/react/
```

###

- Ajuste a propriedade do diretório criado
```
sudo chown -R $USER:$USER /var/www/html/react
```

### 

- Crie um arquivo de configuração
```
sudo nano /etc/nginx/conf.d/react.conf
```

### 

- Insira o seguinte código no arquivo IP público da máquina:

```
server {
         listen 80;
         listen [::]:80;
         root /var/www/html/react/;
         index index.html index.htm;
         # MODIFY SERVER_NAME EXAMPLE
         server_name IP_PUBLICO;
         location / {
              try_files $uri /index.html;
         }
}
```

###

- Verifique possíveis erros de sintaxe

```
sudo nginx -t
```

###

- Reinicie o nginx
```
sudo systemctl restart nginx
```

### Acesso à aplicação

Insira no navegador o seguinte endereço com o IP_PUBLICO da máquina:

```
http://IP_PUBLICO
```

###

Faça o login com as seguintes credenciais:

###
email
```
admin@opc.com
```

###
senha
```
opc@2023
```



