---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["polarization of EM waves", "polarizzazione lineare", "linear polarization", "polarizzazione circolare", "circular polarization", "polarizzazione ellittica", "piano di polarizzazione"]
tags: [competenza, area/fisica]
---

# Polarizzazione delle onde elettromagnetiche

> Descrive come è orientato il campo $\vec E$ di un'onda nel piano perpendicolare alla propagazione: fisso (lineare) oppure rotante (circolare o ellittica).

## Definizione / enunciato
In un'onda piana che si propaga lungo $\hat x$ le componenti $E_x$, $B_x$ sono nulle; restano $E_y$, $E_z$ e le corrispondenti $B_z$, $B_y$. Le equazioni di Maxwell dell'onda piana accoppiano a due a due queste componenti: se c'è $E_y$ deve esserci $B_z$ e viceversa, se c'è $E_z$ deve esserci $B_y$.
- **Polarizzazione lineare:** $\vec E$ (e quindi $\vec B$) vibra sempre sullo stesso piano, il **piano di polarizzazione**. Es. $\vec E\parallel\hat y$: allora $E_z=0$, $B_y$ è uniforme e costante e resta solo $B_z$.
- **Polarizzazione circolare:** i vettori $\vec E$ e $\vec B$ ruotano intorno alla direzione di propagazione.
- Per la linearità delle equazioni di Maxwell l'onda più generale è la somma di un'onda polarizzata lungo $\hat y$ e una lungo $\hat z$: **ellittica** se le due ampiezze sono diverse, **circolare** se sono uguali.

## Formule chiave
$$\frac{\partial E_z}{\partial x}=\frac{\partial B_y}{\partial t},\qquad \frac{\partial E_y}{\partial x}=-\frac{\partial B_z}{\partial t},\qquad \frac{\partial B_z}{\partial x}=-\varepsilon\mu\frac{\partial E_y}{\partial t},\qquad \frac{\partial B_y}{\partial x}=\varepsilon\mu\frac{\partial E_z}{\partial t}$$
Onda polarizzata linearmente lungo $y$: $\vec E=\vec E_0\sin[k(x-ct)]$ con $\vec E_0\parallel\hat y$, $\vec B_0\parallel\hat z$.

## Intuizione
Fissata la direzione di uno dei due campi restano fissate quella dell'altro e quella di propagazione (onde trasversali con $\vec E$ e $\vec B$ ortogonali). La polarizzazione è il solo grado di libertà rimasto: l'orientazione di $\vec E$ nel piano trasverso.

## Come si usa
Per classificare un'onda si scompone $\vec E$ lungo due assi trasversi e si confrontano le ampiezze (e la fase relativa): un solo asse dà polarizzazione lineare, due ampiezze uguali in rotazione danno quella circolare, ampiezze diverse quella ellittica.

## Nei corsi
- **Fisica 2** (triennale): figure di onda polarizzata linearmente e circolarmente nelle slide; equazioni (d), (e), (g), (h) e definizione di polarizzazione ellittica nel testo 30bis. Fonti: `triennale/ANNO 2/fisica 2/lezioni/29&30. LEZIONE.pdf` (pp. 50-52); `triennale/ANNO 2/fisica 2/lezioni/30bis. LEZIONE (Onde_em).pdf` (pp. 4-5).

## Prerequisiti
- [[Onde elettromagnetiche]]: orientazione di E nel piano trasverso

## Porta a
- Nessuno.

## Collegati
- [[Chiralità]]: le sostanze otticamente attive ruotano il piano di polarizzazione
