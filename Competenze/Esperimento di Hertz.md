---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["Hertz experiment", "onda stazionaria elettromagnetica", "standing wave", "specchio perfetto", "misura della velocità delle onde e.m."]
tags: [competenza, area/fisica]
---

# Esperimento di Hertz

> Un'onda e.m. riflessa da uno specchio perfetto forma un'onda stazionaria; misurando la distanza tra i nodi di $\vec B$ con una spira si ricava $\lambda$ e quindi la velocità dell'onda.

## Definizione / enunciato
Un dipolo oscillante genera un'onda e.m. di pulsazione $\omega$ nota che si propaga lungo $x$ e si riflette su uno specchio in O ($x=0$). Il campo totale è la somma di onda progressiva (incidente) e regressiva (riflessa). Se lo specchio è perfetto tutta l'energia è riflessa e il campo $\vec E$ risultante sullo specchio deve essere nullo: ne segue $E_{0,r}=-E_{0,i}$. Il risultato è un'onda stazionaria. Una spira conduttrice mobile nel piano che contiene $\vec E$ è attraversata da $\vec B$ (quasi uniforme se la spira è piccola), che vi induce una corrente per la legge di Faraday-Henry: dove $B$ si annulla la corrente indotta sparisce.

## Formule chiave
$$E(x,t)=E_{0,i}e^{i(kx-\omega t)}+E_{0,r}e^{-i(kx+\omega t)},\qquad 0=E_i(0,t)+E_r(0,t)\Rightarrow E_{0,r}=-E_{0,i}$$
$$E(x,t)=2E_0\sin(kx)\cos(\omega t),\qquad B(x,t)=2B_0\cos(kx)\sin(\omega t)$$
$$\frac{\lambda\omega}{2\pi}=velocit\grave a=c$$

## Intuizione
Nell'onda stazionaria la dipendenza da $x$ e quella da $t$ sono separate: $B$ ha punti di annullamento permanenti lungo l'asse $x$, a distanze fisse legate alla lunghezza d'onda, e la spira li individua. Noti $\lambda$ (misurata) e $\omega$ (imposta dal dipolo) si ottiene la velocità. A fine Ottocento Hertz dimostrò così, in un colpo solo, l'esistenza delle onde e.m. previste da Maxwell e ne misurò per la prima volta la velocità.

## Come si usa
Si scrive la somma di onda incidente e riflessa, si impone la condizione al contorno sullo specchio ($E=0$ in $x=0$), si ricavano i nodi di $B$ e da $\lambda$ e $\omega$ la velocità $c$. Nota: la slide dice che i punti di annullamento di $B$ distano $\lambda$; dall'espressione $\cos(kx)$ gli zeri consecutivi distano $\lambda/2$ (osservazione mia da verificare sul PDF, p. 4).

## Nei corsi
- **Fisica 2** (triennale): inizio della lezione 34, con figura del dipolo, della spira e dello specchio perfetto. Fonti: `triennale/ANNO 2/fisica 2/lezioni/34.   LEZIONE.pdf` (pp. 2-5).

## Prerequisiti
- [[Onde elettromagnetiche]]: sovrapposizione di onda incidente e riflessa
- [[Legge di Faraday-Henry]]: la spira rivela B tramite la corrente indotta

## Porta a
- Nessuno.

## Collegati
- Nessuno.
