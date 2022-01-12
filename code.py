class Estabelecimento():
    
    def __init__(self, nome, endereco, categoria):
        self.nome = nome
        self.endereco = endereco
        self.categoria = categoria
        self.lista = []
        
        
class Gestor():
    
    def __init__(self, nome, cpf, email):
        self.nome = nome
        self.cpf = cpf
        self.email = email
        
class Camera():
    
    def __init__(self):
        self.ip = 0
        self.user = 0
        self.password = 0
        self.modelo = ''
        self.data_de_instalacao = 0
        self.contagem = {} # lista [[Data][Contagem]]
        
    def Insert(self, lista):
        lista_string=[]
        lista_itens = lista
        
        for i in lista_itens:
            i = i.split('=') #info[0].EndTime=2021-05-01 23:59:59
            dados = i[1]
            
            if 'EndTime' in i[0]:    #Data_de_Entrada
                lista_string.append(['EndTime',dados])
                
            elif 'camera' in i[0]:   #Qtd Entrada
                lista_string.append(['camera',dados])
                
            elif 'EnteredSubtotal' in i[0]:   #Qtd Entrada
                lista_string.append(['Entered',dados])
                
            elif 'ExitedSubtotal' in i[0]:   #Qtd Saída
                lista_string.append(['Exited',dados])
                
            elif 'StartTime' in i[0]:   #Data_de_Saída
                lista_string.append(['StartTime',dados])
                
        self.contagem[camera] = lista_string[0:]
    
    def printar(self):
        for k, v in self.contagem.items():
            for j in v:
                print(f'{j[0]} : {j[1]}')
                
    def printar_totais(self):
        soma = 0
        cont = 0
        lista = []
        #print(f'Câmera : {self.modelo}')
        for k, v in self.contagem.items():
            for j in v:
                if 'Entered' in j or 'Exited' in j:
                    soma += int(j[1])
                    if 'Exited' in j:
                        lista.append('Entradas Totais : '+ str(soma))
                else:
                    lista.append(f'{j[0]} : {j[1]}')
        
        print('')
        for string in lista:
            
            if 'camera' in string:
                cont += 1
                if cont > 1:
                    print('')
                    
            print(string)
        
        

lista = [] #lista de informações dos dados

prompt = input().split('=')

for f in range (0, int(prompt[1])):


    prompt_camera =  input('Camera: ')
    lista.append('camera=' + prompt_camera)

    for i in range(0,6):  #adicionando na lista os dados
        lista.append(input('Dados: '))


camera = Camera()
camera.Insert(lista)
camera.printar_totais()
    



