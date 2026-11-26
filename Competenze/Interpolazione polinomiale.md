---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Metodi numerici, Istituzioni algebra, Crittografia]
livello: [triennale, magistrale]
aliases: ["polynomial interpolation", "polinomio interpolante", "condizioni di interpolazione", "nodi di interpolazione", "esistenza e unicità del polinomio interpolante"]
tags: [competenza, area/numerica]
---

# Interpolazione polinomiale

> Costruzione dell'unico polinomio di grado al più $n$ che passa per $n+1$ punti assegnati con ascisse distinte.

## Definizione / enunciato
**Criterio dell'interpolazione.** Dati $(x_i,y_i)$, $i=1,\dots,n+1$, si cerca $\tilde f$ con
$$\tilde f(x_i)=y_i,\qquad i=1,\dots,n+1$$
(condizioni di interpolazione; gli $x_i$ sono i nodi).

**Teorema.** Se le ascisse sono distinte ($x_i\ne x_j$ per $i\ne j$) esiste uno e un solo polinomio $p_n$ di grado $\le n$ tale che $p_n(x_i)=y_i$, $i=1,\dots,n+1$.

*Dimostrazione dell'unicità:* se $p_n$ e $q_n$ interpolassero entrambi, $p_n-q_n$ sarebbe un polinomio di grado $\le n$ non identicamente nullo con $n+1$ radici distinte, contro il principio di identità dei polinomi. L'esistenza si prova costruttivamente con la rappresentazione di Lagrange.

## Formule chiave
$$p_n(x_i)=y_i,\qquad i=1,\dots,n+1,\qquad \deg p_n\le n$$

## Intuizione
Il polinomio di Taylor approssima bene solo vicino al centro (es. $1/x$ con $T_{10,1}$) e richiede le derivate di $f$. L'interpolazione usa invece solo valori in punti sparsi: è adatta anche a dati sperimentali di cui non si conosce la funzione.

## Come si usa
Esempio del raffreddamento del caffè: dati $(0,50),(62,44),(223,32),(348,26)$ (secondi, °C; la tabella della slide 56 riporta 226 s, il codice Matlab usa 223). Il polinomio di grado 3 interpolante (`polyfit`), uguagliato a 39 e risolto con `roots`, dà circa 121 secondi; le altre due radici (oltre 348 s) si scartano. Esempio dell'inquinamento (ossidi di azoto ogni ora a Torino Lingotto): il polinomio di grado 19 oscilla fino a valori negativi, mentre le spline danno grafici affidabili.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn2_approssimazione_print.pdf` (slide 2-10, 56-61).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): teorema di esistenza e unicità dimostrato con il sistema di Vandermonde; nodi numerati $x_1,\dots,x_{n+1}$. Il corso aggiunge la terza forma (rappresentazione di Newton) e il condizionamento tramite la costante di Lebesgue; l'interpolazione è poi la base delle formule di quadratura interpolatorie. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_03_approssimazione_print (1).pdf` (p. 2-7, 24-26).
- **Istituzioni algebra** (triennale): Cor. 16. Dati $n_0,\dots,n_d\in K$ distinti e $s_0,\dots,s_d\in K$ qualsiasi, esiste un unico $q\in K[x]$ di grado $\le d$ con $q(n_i)=s_i$, su un campo $K$ qualunque. Si ottiene dal teorema cinese dei resti per polinomi con moduli $x-n_i$, che sono coprimi a due a due, perché $f\equiv s_i\pmod{x-n_i}\iff f(n_i)=s_i$. Fonti: `triennale/ANNO 2/istituzioni/Alg-12-12-22.pdf` (lezione 30, pp. 3, 6).
- **Crittografia** (magistrale): il risultato è usato su un campo finito $\mathbb Z_p$ nello schema a soglia di Shamir. Il segreto $M$ è il termine noto di un polinomio di grado $m-1$ e le ombre sono suoi valori. $m$ ombre danno un sistema di Vandermonde con soluzione unica, che ricostruisce $M=F(0)$. Fonti: `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto11.pdf` (pp. 10-16).

## Prerequisiti
- Nessun prerequisito interno al corso.

## Porta a
- [[Rappresentazione di Newton]]: terza forma del polinomio, con differenze divise (Metodi numerici)
- [[Costante di Lebesgue]]: condizionamento del problema di interpolazione (Metodi numerici)
- [[Rappresentazione monomiale del polinomio interpolante]]: una base per scrivere il polinomio
- [[Rappresentazione di Lagrange]]: prova costruttiva dell'esistenza
- [[Convergenza del polinomio interpolante]]: errore f - p_n al crescere di n
- [[Spline lineare]]: condizioni di interpolazione imposte a tratti

## Collegati
- [[Sviluppi di Maclaurin]]: il polinomio di Taylor approssima solo vicino al centro (es. $e^x$ in 0): l'interpolazione è l'alternativa
- [[Teorema di Ruffini]]: principio di identità dei polinomi (al più $n$ radici), garantisce l'unicità
- [[Teorema cinese dei resti]]: in Istituzioni algebra esistenza e unicità sono un corollario del teorema cinese per polinomi
