---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["French-DeGroot model", "modello di DeGroot", "DeGroot learning model", "linear averaging dynamics", "dinamica di media lineare", "averaging dynamics", "consenso", "consensus", "opinion dynamics", "dinamica delle opinioni"]
tags: [competenza, area/network]
---

# Modello di French-DeGroot

> Ogni agente aggiorna la propria opinione facendo la media pesata delle opinioni dei vicini, $x(t+1)=Px(t)$: su un grafo fortemente connesso e aperiodico tutti convergono al consenso $\pi'x(0)$, pesato dalla centralità di distribuzione invariante.

## Definizione / enunciato
Rete sociale $\mathcal G=(\mathcal V,\mathcal E,W)$, con $(i,j)\in\mathcal E$ se $i$ è influenzato da $j$, $W_{ij}$ forza dell'influenza, $P=D^{-1}W$. Ogni agente ha un'opinione iniziale $x_i(0)\in\mathbb R$ e
$$x_i(t+1)=\sum_jP_{ij}x_j(t),\qquad x(t)=P^tx(0).$$
**Teorema.** Se $\mathcal G$ è fortemente connesso e aperiodico,
$$\lim_{t\to+\infty}x(t)=\alpha\mathbb 1,\qquad \alpha=\pi'x(0)=\sum_k\pi_kx_k(0),$$
con $\pi=P'\pi$ unica distribuzione invariante. Equivalentemente $P^t\to\mathbb 1\pi'$.

## Formule chiave
- Equilibri: $Px_0=x_0$; i vettori di consenso $\alpha\mathbb 1$ sono sempre equilibri, e se $s_{\mathcal G}=1$ sono gli unici.
- **Invariante del moto:** per ogni distribuzione invariante $\pi$, $\pi'x(t+1)=\pi'Px(t)=\pi'x(t)$, quindi $\pi'x(t)=\pi'x(0)$.
- **Prova rapida:** $M=P-\mathbb 1\pi'$ soddisfa $M^t=P^t-\mathbb 1\pi'$ e ha tutti gli autovalori di modulo $<1$ (connesso e aperiodico), quindi $M^t\to0$.
- **Risultato generale:** se $\mathcal G$ ha una componente globalmente raggiungibile $C_0$ aperiodica (un solo pozzo), $x_i(t)\to\pi'x(0)$ con $\pi$ supportata su $C_0$: le opinioni fuori da $C_0$ non contano.
- Senza aperiodicità non c'è convergenza (grafo-linea a 2 nodi: $x(t)$ alterna $(\alpha,\beta)$ e $(\beta,\alpha)$); con più pozzi non c'è consenso globale.

## Intuizione
Le opinioni si mescolano lungo i link finché diventano uguali; il valore finale è una media in cui pesa di più chi è ascoltato da agenti a loro volta ascoltati. $\pi_i$ è il **potere sociale** dell'agente $i$.

## Come si usa
Esempi delle slide con $x(0)=(0,1,2,5,3)$: grafo non orientato non pesato a 5 nodi, $\pi=(1/6,1/3,1/4,1/6,1/12)$, consenso $23/12$; grafo orientato, $\pi=(1/8,3/8,1/4,1/8,1/8)$, consenso 2; grafo con componente globalmente raggiungibile $\{1,2,3\}$, $\pi=(1/3,1/3,1/3,0,0)$, consenso 1. Applicazioni: fusione di opinioni, algoritmi distribuiti, sensori, bilanciamento del carico, sincronizzazione di orologi, coordinamento di robot.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 5, "French-De Groot learning model", "Analysis of the French-De Groot model", "Extensions of the main theorem". Fonti: `magistrale/Dinamiche su network/slide/Slides-5-Averaging-dynamics(con commenti).pdf` (pp. 2-29, 46-62, 85-93).

## Prerequisiti
- [[Matrice stocastica]]: spettro e distribuzione invariante di $P$
- [[Periodo di uno stato]]: l'aperiodicità è necessaria per convergere
- [[Grafo di condensazione]]: un solo pozzo per il consenso

## Porta a
- [[Saggezza della folla]]: prestazioni statistiche del consenso
- [[Calcolo distribuito della media]]: $P$ come scelta di progetto
- [[Velocità di convergenza al consenso]]: quanto è veloce
- [[Agenti testardi]]: caso con più componenti pozzo

## Collegati
- [[Centralità di distribuzione invariante]]: pesi del consenso
- [[Proprietà contrattive delle matrici stocastiche]]: prova alternativa della convergenza
- [[Dinamica lineare di flusso su rete]]: dinamica duale $y(t+1)=P'y(t)$
- [[Modello del votante]]: versione stocastica con opinioni discrete
