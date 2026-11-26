---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["finite improvement property", "FIP", "improvement graph", "grafo di miglioramento", "I-graph", "improvement walk", "cammino di miglioramento", "potenziale ordinale generalizzato", "generalized ordinal potential"]
tags: [competenza, area/network]
---

# Proprietà di miglioramento finito

> Un gioco finito ha la FIP se ogni sequenza di miglioramenti unilaterali è finita, cioè il grafo di miglioramento è aciclico: allora esiste un equilibrio puro. La FIP equivale a un potenziale ordinale generalizzato.

## Definizione / enunciato
Gioco finito, $\mathcal X=\prod_i\mathcal A_i$. **Grafo di miglioramento** $\mathcal G_I=(\mathcal X,\mathcal E_I)$, sottografo dell'ipercubo:
$$\mathcal E_I=\{(x,y):\exists i,\ x_{-i}=y_{-i},\ u_i(x)<u_i(y)\}.$$
**FIP:** non esistono walk di miglioramento di lunghezza infinita, cioè $\mathcal G_I$ è un DAG.
- **Lemma.** FIP $\Rightarrow$ esiste un equilibrio di Nash puro (ogni walk massimale termina in un equilibrio).
- **Proposizione.** Ogni gioco potenziale ordinale finito ha la FIP: lungo un walk $\Phi(x^{(0)})<\Phi(x^{(1)})<\dots$, quindi $l\le|\mathcal X|-1$.
- Il viceversa è falso: il $2\times2$ con payoff $(1,0),(2,0)/(2,0),(0,1)$ ha la FIP, ma un potenziale ordinale dovrebbe soddisfare $\Phi(-,-)<\Phi(+,-)<\Phi(+,+)<\Phi(-,+)=\Phi(-,-)$.
- **Potenziale ordinale generalizzato:** $u_i(y_i,x_{-i})-u_i(x_i,x_{-i})>0\Rightarrow\Phi(y_i,x_{-i})-\Phi(x_i,x_{-i})>0$ (solo un'implicazione). **Proposizione:** per giochi finiti, potenziale ordinale generalizzato $\iff$ FIP.

## Formule chiave
Catena di implicazioni: esatto $\Rightarrow$ ordinale $\Rightarrow$ ordinale generalizzato $\iff$ FIP $\Rightarrow$ esiste un Nash puro.
Nei $2\times2$: coordinazione, dilemma del prigioniero e anti-coordinazione hanno la FIP; la discoordinazione no (il grafo di miglioramento è un 4-ciclo).

## Intuizione
Se gli agenti migliorano uno alla volta, prima o poi si fermano, a meno che non ci sia un ciclo in cui ciascuno, migliorando, riporta la situazione al punto di partenza (come in matching pennies).

## Come si usa
Per provare che una dinamica di miglioramento (o di best response) si arresta in un equilibrio basta mostrare che il grafo di miglioramento non ha cicli, ad esempio esibendo un potenziale ordinale generalizzato.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 9, "The I-graph and the Finite Improvement Property", "FIP for 2X2 games", "Finite Improvement Property". Fonti: `magistrale/Dinamiche su network/slide/Slides-9-Games-(con-commenti).pdf` (pp. 83-92).

## Prerequisiti
- [[Gioco potenziale]]: i potenziali ordinali danno la FIP

## Porta a
- [[Dinamica di best response]]: analisi tramite grafi sullo spazio delle configurazioni

## Collegati
- [[Ordinamento topologico]]: un DAG ammette un ordine compatibile con i miglioramenti
- [[Giochi 2x2 simmetrici]]: esempi con e senza FIP
- [[Grafo di condensazione]]: la FIP dice che ogni componente fortemente connessa è un nodo
