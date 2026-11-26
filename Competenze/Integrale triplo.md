---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["triple integral", "integrali tripli", "integrale di volume", "massa di un solido", "momento d'inerzia rispetto all'asse z"]
tags: [competenza, area/analisi]
---

# Integrale triplo

> L'analogo dell'integrale doppio su un solido $\Omega\subset\mathbb R^3$, costruito con cubetti: dà volumi, masse, baricentri e momenti d'inerzia.

## Definizione / enunciato
Per $\Omega\subset\mathbb R^3$ (ad esempio aperto limitato) e $f$ continua e limitata si partiziona lo spazio in cubetti di lato $\varepsilon$ con facce parallele ai piani coordinati, si prendono quelli contenuti in $\Omega$ e un punto in ciascuno:
$$S(\varepsilon)=\sum_{q\in Q_\varepsilon}f(x_q,y_q,z_q)\,\mathrm{Vol}(q),\qquad \iiint_\Omega f\,dx\,dy\,dz\overset{def}{=}\lim_{\varepsilon\to0}S(\varepsilon).$$
Il limite esiste finito e non dipende dai punti scelti.

## Formule chiave
- $\iiint_\Omega1=\mathrm{Vol}(\Omega)$; con densità $f$, $\iiint_\Omega f=$ massa.
- $\bar x=\frac{\iiint_\Omega x}{\mathrm{Vol}(\Omega)}$ (e così $\bar y,\bar z$); $\frac{\iiint_\Omega f}{\mathrm{Vol}(\Omega)}$ è il valore medio.
- Momento d'inerzia rispetto all'asse $z$ con densità costante $\rho_0$: $I=\rho_0\iiint_\Omega(x^2+y^2)$.

## Intuizione
Stessa costruzione dell'integrale doppio con una dimensione in più; si calcola per fili (Fubini), per strati, o con coordinate cilindriche e sferiche.

## Come si usa
Esempio guida delle lezioni: la semisfera $x^2+y^2+z^2\le4$, $z\ge0$, con il foro conico $z\le\sqrt{x^2+y^2}$. L'integrale $\iiint_\Omega z$ vale $2\pi$ in tutti e tre i modi in cui è calcolato: per strati, per fili verticali (spezzando il cerchio di raggio 2 in un cerchio di raggio $\sqrt2$ e una corona) e in coordinate sferiche.

## Nei corsi
- **Analisi 2** (triennale): lezione del 26/10/2022 e successiva. Fonti: `triennale/ANNO 2/analisi 2/AII 09 2022 int tripli.pdf` (pp. 1-14); `triennale/ANNO 2/analisi 2/AII 10 2022 coord sferiche e int linea.pdf` (pp. 1-5).

## Prerequisiti
- [[Integrale doppio]]: stessa costruzione con cubetti

## Porta a
- [[Integrazione per strati]]: sezioni orizzontali
- [[Teorema della divergenza]]: integrale triplo della divergenza

## Collegati
- [[Teorema di Fubini]]: fili paralleli all'asse z
