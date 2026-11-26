---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["electrostatic potential", "potenziale elettrico", "electric potential", "differenza di potenziale", "volt", "E = -grad V", "circuitazione del campo elettrostatico", "rotore del campo elettrostatico", "energia potenziale elettrostatica"]
tags: [competenza, area/fisica]
---

# Potenziale elettrostatico

> Funzione scalare della posizione il cui gradiente cambiato di segno dà il campo elettrostatico: misura il lavoro del campo per unità di carica e esiste perché il campo è conservativo.

## Definizione / enunciato
Il lavoro del campo di una carica puntiforme $q$ su una carica di prova $q'$ da A a B non dipende dal percorso ma solo dagli estremi. Si definisce la **differenza di potenziale** come variazione di energia potenziale per unità di carica: $\Delta V_{AB}=V_B-V_A=-L_{AB}/q'$. Unità: volt, $V=J/C$; il campo si misura in V/m (equivalente a N/C).
Il potenziale è noto a meno di una costante; ponendo $V=0$ all'infinito, $V(P)$ è il lavoro compiuto dal campo per portare una carica unitaria positiva da P all'infinito.
**Conservatività** (tre forme equivalenti): circuitazione nulla su ogni curva chiusa; esistenza di $V(P)$; rotore nullo, ricavato calcolando la circuitazione sulle facce di un parallelepipedo infinitesimo.

## Formule chiave
$$L_{AB}=\int_A^B\vec F\cdot d\vec s=\frac{qq'}{4\pi\varepsilon_o}\left(\frac1{r_A}-\frac1{r_B}\right)=-(E_{P,B}-E_{P,A}),\qquad V=\frac{q}{4\pi\varepsilon_o r}+\text{costante}$$
$$V(P)=\frac1{4\pi\varepsilon_o}\sum_{i=1}^N\frac{q_i}{r_{P,i}},\qquad V=\frac1{4\pi\varepsilon_o}\int\frac{\rho}{|\vec r-\vec r'|}d\tau+\text{costante}$$
$$dV=-\vec E\cdot d\vec s,\qquad \vec E=-\vec\nabla V,\qquad \vec F=-\vec\nabla E_P,\qquad \oint\vec E\cdot d\vec s=0\iff\vec\nabla\times\vec E=0$$

## Intuizione
Il potenziale è uno scalare, quindi si somma senza componenti (sovrapposizione); il campo si ottiene poi derivando. Le superfici equipotenziali ($V$ = costante) sono in ogni punto perpendicolari alle linee di forza, perché $\vec E=-\vec\nabla V$.

## Come si usa
Per una distribuzione discreta o continua si sommano (o integrano) i potenziali delle cariche puntiformi e si ricava $\vec E$ con il gradiente; per il lavoro su una carica basta $L=-q'\Delta V$, senza integrare lungo il cammino.

## Nei corsi
- **Fisica 2** (triennale): lezione 6, prima parte (lavoro, potenziale di cariche puntiformi e distribuzioni, nabla, superfici equipotenziali, rotore). Notazione $\varepsilon_o$, $E_P$ per l'energia potenziale, $d\tau$ per il volumetto. Fonti: `triennale/ANNO 2/fisica 2/lezioni/6. LEZIONE.pdf` (pp. 2-25).

## Prerequisiti
- [[Campo elettrostatico]]: il lavoro del campo per unità di carica definisce V
- [[Integrale di linea]]: V è l'integrale di linea di E cambiato di segno
- [[Gradiente]]: E = -∇V

## Porta a
- [[Equazione di Poisson]]: si sostituisce E = -∇V
- [[Conduttori in equilibrio elettrostatico]]: il conduttore è un volume equipotenziale
- [[Atomo di idrogeno]]: potenziale coulombiano -Ze²/4πε0r

## Collegati
- [[Campo conservativo]]: il campo elettrostatico è conservativo: circuitazione nulla, rot E = 0
- [[Rotore]]: rot E = 0 è la forma differenziale della conservatività
- [[Campo gravitazionale]]: stessa struttura di potenziale 1/r e superfici equipotenziali
- [[Legge di Faraday-Henry]]: con B variabile la circuitazione di E non è più nulla
- [[Potenziale standard di riduzione]]: la fem di una pila è una differenza di potenziale, W = QΔV
