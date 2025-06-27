--CRIAÇÃO DE TABELAS PARA O APP

-- Tabela: Usuarios
CREATE TABLE Usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    email VARCHAR(255),
    cpf VARCHAR(14),
    cidade VARCHAR(255),
    bairro VARCHAR(255),
    numero VARCHAR(10),
    telefone VARCHAR(15),
    senha VARCHAR(255),
    pontos INT
);

-- Tabela: TipoResiduos
CREATE TABLE TipoResiduos (
    id_tipo_residuo INT PRIMARY KEY AUTO_INCREMENT,
    descricao_residuo VARCHAR(255)
);

-- Tabela: PontosColeta
CREATE TABLE PontosColeta (
    id_ponto INT PRIMARY KEY AUTO_INCREMENT,
    nome_ponto VARCHAR(255),
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    endereco VARCHAR(255)
);

-- Tabela: Descartes
CREATE TABLE Descartes (
    id_descarte INT PRIMARY KEY AUTO_INCREMENT,
    quantidade DECIMAL(10,2),
    imagem VARCHAR(255),
    data_descarte DATETIME,
    pontos_ganhos INT,
    id_usuario INT,
    id_tipo_residuo INT,
    id_ponto INT,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_tipo_residuo) REFERENCES TipoResiduos(id_tipo_residuo),
    FOREIGN KEY (id_ponto) REFERENCES PontosColeta(id_ponto)
);

-- Tabela: EmpresaParceiras
CREATE TABLE EmpresaParceiras (
    id_empresa INT PRIMARY KEY AUTO_INCREMENT,
    nome_empresa VARCHAR(255),
    endereco VARCHAR(100),
    contato VARCHAR(100),
    responsavel VARCHAR(100),
    contato_responsavel VARCHAR(100),
    pontos_requeridos INT
);

-- Tabela: TransacaoEmpresas
CREATE TABLE TransacaoEmpresas (
    id_transacao INT PRIMARY KEY AUTO_INCREMENT,
    pontos_usados INT,
    data_transacao DATETIME,
    id_usuario INT,
    id_empresa INT,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_empresa) REFERENCES EmpresaParceiras(id_empresa)
);


-- INSERÇÃO DE DADOS NAS TABELAS

-- Tabela: Banners
CREATE TABLE Banners (
    id_banner INT PRIMARY KEY AUTO_INCREMENT,
    imagem_banner VARCHAR(255),
    link VARCHAR(255)
);

-- Usuários
INSERT INTO Usuarios (nome, email, cpf, cidade, bairro, numero, telefone, senha, pontos)
VALUES 
('Luana', 'lulu@email.com', '07545324102', 'União', 'Centro', '123', '11999999999', 'senha123', 50);

-- Tipos de resíduos
INSERT INTO TipoResiduos (descricao_residuo)
VALUES 
('Plástico'), 
('Papel'), 
('Metal'), 
('Vidro');

-- Pontos de coleta
INSERT INTO PontosColeta (nome_ponto, latitude, longitude, endereco)
VALUES 
('Ecoponto Central', -23.550520, -46.633308, 'Rua Verde, 100');

-- Empresas parceiras
INSERT INTO EmpresaParceiras (nome_empresa, endereco, contato, responsavel, contato_responsavel, pontos_requeridos, id_tipo_servico)
VALUES 
('Eco Recompensas', 'Av. Sustentável, 200', 'empresa@eco.com', 'João Verde', 'joao@eco.com', 30, 1);

-- Banners
INSERT INTO Banners (imagem_banner, link)
VALUES 
('https://meusite.com/banner1.jpg', 'https://empresa.com/oferta');

-- Descartes
INSERT INTO Descartes (quantidade, imagem, data_descarte, pontos_ganhos, id_usuario, id_tipo_residuo, id_ponto)
VALUES 
(2.5, 'https://meusite.com/imagem.jpg', NOW(), 10, 1, 1, 1);

-- Transações com empresas
INSERT INTO TransacaoEmpresas (pontos_usados, data_transacao, id_usuario, id_empresa)
VALUES 
(30, NOW(), 1, 1);
