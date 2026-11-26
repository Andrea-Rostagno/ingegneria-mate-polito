---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["force between parallel currents", "definizione dell'ampere", "ampere definition", "F = μ0 I I' L / 2πR", "relazione ε0 μ0 = 1/c²"]
tags: [competenza, area/fisica]
---

# Forza tra correnti parallele

> Due fili rettilinei paralleli percorsi da corrente si attraggono se le correnti sono equiverse e si respingono se opposte, con forza per unità di lunghezza $\mu_0II'/2\pi R$; la legge definisce l'ampere.

## Definizione / enunciato
Due fili rettilinei con correnti $I$ e $I'$, paralleli a distanza $R$: il filo $I$ genera nel punto del secondo il campo di Biot-Savart, che agisce sul tratto $L'$ del filo $I'$ con la forza $I'\vec L'\times\vec B$, diretta lungo la congiungente.
**Risultato:** due correnti parallele ed equiverse si attraggono; con versi opposti si respingono.
**Unità elettromagnetiche:** carica, $\varepsilon_0$ e $\mu_0$ non sono indipendenti; fissata una in modo operativo, le altre sono derivate. Si fissa l'unità di corrente attraverso l'interazione di due correnti: **un ampere** è la corrente che circola in due conduttori rettilinei e paralleli, separati dalla distanza di un metro, che si attirano con una forza di $2\cdot10^{-7}$ N per metro di lunghezza. Da qui segue il coulomb ($1A=1C/s$); misurando la forza tra due cariche di un coulomb a un metro ($F=8.9874\cdot10^9$ N) si ricava $\varepsilon_0$.

## Formule chiave
$$\vec B=\frac{\mu_0I}{2\pi R}\vec u_\theta,\qquad \vec F'=I'L'\vec u_T\times\vec B=-\vec u_R\frac{\mu_0II'}{2\pi R}L'$$
$$2\cdot10^{-7}\,N=\frac{\mu_0}{2\pi}\frac{1A\cdot1A}{1m}\cdot1m\;\Rightarrow\;\mu_0=4\pi\cdot10^{-7}\ N\,C^{-2}s^2$$
$$\varepsilon_0=8.854\cdot10^{-12}\ N^{-1}m^{-2}C^2,\qquad \frac1{\varepsilon_0\mu_0}=c^2\;\Rightarrow\;\varepsilon_0=\frac1{c^2\mu_0}=\frac{10^7}{4\pi c^2}$$

## Intuizione
Il segno è opposto al caso elettrostatico: cariche uguali si respingono, ma correnti concordi si attraggono. La forza misurabile con una bilancia (bilancia di Ampère, nella figura delle slide) rende la corrente la grandezza più comoda da fissare operativamente.

## Come si usa
Si calcola il campo di un filo nella posizione dell'altro (Biot-Savart), poi la forza con $I'\vec L'\times\vec B$. Con i valori della definizione si ricava $\mu_0$; la relazione con $c$ sarà giustificata dalle equazioni di Maxwell.

## Nei corsi
- **Fisica 2** (triennale): fine della lezione 15&16, "Forze magnetiche tra correnti" e "Le unità di misura elettromagnetiche". La slide di p. 15 scrive $\mu_0'$ con un apice spurio (refuso). Fonti: `triennale/ANNO 2/fisica 2/lezioni/15&16. LEZIONE.pdf` (pp. 13-16).

## Prerequisiti
- [[Legge di Biot-Savart]]: campo del primo filo nella posizione del secondo
- [[Forza magnetica su una corrente]]: forza IL × B sul secondo filo

## Porta a
- Nessuno.

## Collegati
- Nessuno.
