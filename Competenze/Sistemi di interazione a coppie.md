---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["pairwise interacting network systems", "sistemi a interazione a coppie", "pairwise interacting systems", "nucleo di mutazione", "mutation kernel", "nucleo di interazione", "interaction kernel", "configurazioni assorbenti", "absorbing configurations", "grafo delle configurazioni", "sistemi binari a coppie"]
tags: [competenza, area/network]
---

# Sistemi di interazione a coppie

> Classe generale di modelli stocastici su rete (epidemie SI, SIS, SIR, votante, dinamica evolutiva): ogni nodo cambia stato per "mutazione" spontanea o per interazione con un vicino lungo un link. È una CTMC sullo spazio delle configurazioni $\mathcal A^{\mathcal V}$.

## Definizione / enunciato
Grafo $\mathcal G=(\mathcal V,\mathcal E,W)$, parametro $\beta>0$, stati $X_i(t)\in\mathcal A$. **Nucleo di mutazione** $\psi\in\mathbb R^{\mathcal A\times\mathcal A}$ stocastico; **nucleo di interazione** $\varphi(c)\in\mathbb R^{\mathcal A\times\mathcal A}$ stocastico per ogni $c\in\mathcal A$. Nodi con orologi di Poisson di tasso 1, link $(i,j)$ con orologi di tasso $\beta W_{ij}$:
- se suona il link $(i,j)$ e $X_i=a$, $X_j=c$, allora $X_i$ diventa $b$ con probabilità $\varphi_{ab}(c)$ (interazione);
- se suona il nodo $i$ e $X_i=a$, allora $X_i$ diventa $b$ con probabilità $\psi_{ab}$ (mutazione).
$X(t)$ è una CTMC su $\mathcal X=\mathcal A^{\mathcal V}$ con tassi
$$\Lambda_{xy}=\begin{cases}0&x,y\text{ differiscono in più di un nodo}\\ \psi_{x_iy_i}+\beta\sum_jW_{ij}\varphi_{x_iy_i}(x_j)&x_i\neq y_i,\ x_{-i}=y_{-i}.\end{cases}$$

## Formule chiave
Esempi: SI ($\psi=I$, $\varphi(I)$ porta S in I), SIS ($\psi$ porta I in S), SIR ($\psi$ porta I in R), votante ($\psi=I$, $\varphi(c)=\mathbb 1\delta^{(c)\prime}$), dinamica evolutiva ($\varphi(c)=(1-f_c)I+f_c\mathbb 1\delta^{(c)\prime}$).
**Configurazioni assorbenti** ($\mathcal G$ connesso): SI $\{S\mathbb 1,I\mathbb 1\}$; SIS $\{S\mathbb 1\}$; SIR $\{S,R\}^{\mathcal V}$; votante ed evolutiva $\{c\mathbb 1:c\in\mathcal A\}$. Da ogni configurazione c'è un cammino verso una assorbente, quindi l'assorbimento avviene in tempo finito con probabilità 1.
**Caso binario** ($\mathcal A=\{0,1\}$): $N(t)=\sum_iX_i(t)$ salta con tassi
$$\lambda_k(x)=(n-k)\psi_{01}+\zeta_+(x)\beta\varphi_{01}(1),\qquad \mu_k(x)=k\psi_{10}+\zeta_-(x)\beta\varphi_{10}(0),$$
con bordi attivi $\zeta_+(x)=\sum_{i,j}W_{ij}(1-x_i)x_j$, $\zeta_-(x)=\sum_{i,j}W_{ij}x_i(1-x_j)$. In generale $N(t)$ non è markoviana; lo è (nascita-morte) quando $\zeta_\pm$ dipendono solo da $k$, ad esempio su $K_n$ con $\zeta_\pm=k(n-k)$.

## Intuizione
Due grafi da non confondere: $\mathcal G$ (chi interagisce con chi) e $\mathcal G_\Lambda$ sullo spazio delle configurazioni ($2^n$ nodi nel caso binario). Le domande tipiche sono tempi e probabilità di assorbimento, difficili su grafi generali.

## Come si usa
Si riconosce il modello dai nuclei, si individuano le configurazioni assorbenti e si calcolano tempi di assorbimento (SI, SIS) o probabilità di assorbimento (SIR, votante, evolutiva), spesso riducendosi a una nascita-morte per $N(t)$. Esempio delle slide: grafo a 3 nodi e grafo $\mathcal G_\Lambda$ sugli 8 stati SSS...III per SI e SIS.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 8, "Pairwise interacting network systems", "Absorbing configurations", "Binary Pairwise Interacting Systems". Fonti: `magistrale/Dinamiche su network/slide/Slides-8-Epidemics+PairwiseInteractingSystems.pdf` (pp. 26-37).

## Prerequisiti
- [[Catena di Markov a tempo continuo]]: CTMC sullo spazio delle configurazioni
- [[Grafo]]: rete delle interazioni
- [[Processo di Poisson]]: orologi sui nodi e sui link

## Porta a
- [[Epidemia SI su rete]]: tempo di infezione totale
- [[Epidemia SIS su rete]]: tempo di estinzione
- [[Modello del votante]]: probabilità di consenso su un'opinione
- [[Dinamica evolutiva su rete]]: probabilità di fissazione
- [[Sistemi multi-agente anonimi]]: limite di campo medio sul grafo completo

## Collegati
- [[Modello SIR]]: epidemia SIR come sistema a coppie
- [[Catena di nascita e morte continua]]: $N(t)$ sul grafo completo
