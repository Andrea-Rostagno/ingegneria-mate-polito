---
tipo: competenza
area: analisi
corsi: [Analisi 2, Geometria differenziale]
livello: [triennale]
aliases: ["parametric curves", "curva in R^n", "lunghezza di una curva", "arc length", "vettore tangente", "riparametrizzazione", "verso di percorrenza", "curva regolare", "regular curve", "curva semplice", "curva chiusa", "curva piana", "curve equivalenti", "curva non parametrizzata"]
tags: [competenza, area/analisi]
---

# Curve parametriche

> Una curva è una funzione $g:I\to\mathbb R^n$ da un intervallo: si pensa come traiettoria di un punto, con velocità $g'$ tangente alla curva e lunghezza $\int\|g'\|$.

## Definizione / enunciato
Una **curva in $\mathbb R^n$** è $g:I\to\mathbb R^n$, $I\subseteq\mathbb R$ intervallo, $g(t)=(g_1(t),\dots,g_n(t))$. È continua, differenziabile, $C^k$ se lo è ogni componente. Se $g\in C^2$: $g(t)$ è la posizione, $g'(t)=(g_1'(t),\dots,g_n'(t))$ la velocità, $g''(t)$ l'accelerazione. Se $g'(t_0)\ne0$, il vettore $g'(t_0)$ applicato in $g(t_0)$ è tangente alla curva.

**Riparametrizzazione.** Se $\varphi:[c,d]\to[a,b]$ è $C^1$ e biunivoca, $\tilde\gamma(\tau)=\gamma(\varphi(\tau))$ ha la stessa immagine di $\gamma$ e velocità $\tilde\gamma'(\tau)=\gamma'(\varphi(\tau))\varphi'(\tau)$; mantiene il verso di percorrenza se $\varphi$ è crescente, lo inverte se è decrescente.

## Formule chiave
$$L(g)=\int_a^b\|g'(t)\|\,dt\qquad(g:[a,b]\to\mathbb R^n\ \text{di classe }C^1).$$

## Intuizione
L'integrale della velocità scalare è lo spazio percorso; coincide con la lunghezza geometrica quando $g$ è iniettiva.

## Come si usa
Esempi della lezione: $g(t)=(2t,e^t)$ ha velocità $(2,e^t)$ e accelerazione $(0,e^t)$; $g(t)=(R\cos\omega t,R\sin\omega t)$ è un moto circolare uniforme antiorario di raggio $R$ e velocità angolare $\omega$. Le curve servono per la derivata di $f$ lungo una curva e per gli integrali di linea, che non cambiano per riparametrizzazioni che conservano il verso.

## Nei corsi
- **Analisi 2** (triennale): definite il 17/10/2022 introducendo la derivata della funzione composta; riparametrizzazione nella lezione sui campi conservativi. Fonti: `triennale/ANNO 2/analisi 2/AII 06 2022 max min chain rule.pdf` (pp. 9-13); `triennale/ANNO 2/analisi 2/AII 11 2022 campi conservativi.pdf` (pp. 1-4).
- **Geometria differenziale** (triennale): la curva è $P(t)=(x(t),y(t),z(t))$.
  - **Curva regolare:** $P\in C^1(I)$ e $P'(t)\neq0$ per ogni $t$. Per la curvatura si chiede $C^2$, per la torsione $C^3$. Controesempio: $(t^2,t^2,t^2)$ non è regolare in $t=0$.
  - **Curva chiusa:** $P(a)=P(b)$. **Semplice:** senza autointersezioni. **Piana:** contenuta in un piano. Per esempio $(t,t^2,t^3)$ non è piana, per il principio di identità dei polinomi.
  - **Ascissa curvilinea:** $s(t)=\int_{t_0}^t\|P'\|$, con $ds/dt=\|P'\|$; riparametrizzata con $s$, la curva ha velocità unitaria. Esempio: per $(t,t^2)$, $s=\frac t2\sqrt{1+4t^2}+\frac14\ln(2t+\sqrt{1+4t^2})$.
  - **Curve $C^k$-equivalenti:** $Q=P\circ\tau^{-1}$, con $\tau$ e $\tau^{-1}$ di classe $C^k$, quindi $\tau$ è strettamente monotona.
    - Una curva non parametrizzata è una classe di equivalenza.
    - Sono invarianti la traiettoria, la lunghezza e la retta tangente (non il vettore tangente).
    - Esempio: la circonferenza riparametrizzata con $\tau=\tan(t/2)$ diventa $Q(\tau)=\big(\frac{1-\tau^2}{1+\tau^2},\frac{2\tau}{1+\tau^2}\big)$.
  - Fonti: `triennale/ANNO 2/geometria differenziale/Lezione01_GD.pdf` (pp. 8-16); `triennale/ANNO 2/geometria differenziale/Lezione02_03_GD.pdf` (pp. 1-19); `triennale/ANNO 2/geometria differenziale/Lezione05_GD.pdf` (pp. 1-3).

## Prerequisiti
- [[Derivata]]: velocità come derivata delle componenti

## Porta a
- [[Regola della catena in più variabili]]: derivata di f(g(t))
- [[Integrale di linea]]: integrale lungo la curva
- [[Piano osculatore]]: piano di P' e P'' nei punti biregolari (Geometria differenziale)
- [[Riferimento di Frenet]]: T = P'/||P'|| e la base mobile (Geometria differenziale)
- [[Curvatura di una curva]]: variazione di T rispetto all'ascissa curvilinea (Geometria differenziale)
- [[Spazio tangente]]: T_pS è l'insieme dei γ'(0) delle curve per p (Geometria differenziale)

## Collegati
- [[Velocità e accelerazione]]: analogia cinematica g', g''
