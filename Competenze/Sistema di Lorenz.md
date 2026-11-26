---
tipo: competenza
area: analisi
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["Lorenz system", "modello di Lorenz", "equazioni di Lorenz", "attrattore di Lorenz", "Lorenz attractor", "mappa dei massimi di Lorenz"]
tags: [competenza, area/analisi]
---

# Sistema di Lorenz

> Sistema di tre equazioni differenziali per la convezione in uno strato di fluido scaldato dal basso; fisicamente limitato, è il paradigma delle biforcazioni e della transizione al caos.

## Definizione / enunciato
Un modo di velocità e due modi di temperatura:
$$\dot x=\sigma(y-x),\qquad\dot y=\rho x-y-xz,\qquad\dot z=-\beta z+xy,\qquad\rho,\sigma,\beta>0,\ (x,y,z)\in\mathbb R^3 .$$
Fissati $\sigma$ e $\beta$ e variando $\rho$, esiste $D\subset\mathbb R^3$ contenente l'origine in cui il campo punta verso l'interno sul bordo, quindi $D$ contiene l'attrattore $A=\bigcap_{t\ge0}\phi^tD$.

## Formule chiave
- $\mathrm{div}f=-\sigma-1-\beta<0$: i volumi si contraggono esponenzialmente con tasso $1+\beta+\sigma$ (sistema dissipativo).
- Origine: $Df(0)=\begin{pmatrix}-\sigma&\sigma&0\\\rho&-1&0\\0&0&-\beta\end{pmatrix}$, autovalori $\lambda_1=-\beta$, $\lambda_{2,3}=-\frac{1+\sigma}2\mp\frac12\sqrt{(1+\sigma)^2-4\sigma(1-\rho)}$: per $0<\rho<1$ l'origine è un pozzo ed è l'unico punto fisso.
- Per $\rho>1$ nascono $x^\pm=\big(\pm\sqrt{\beta(\rho-1)},\pm\sqrt{\beta(\rho-1)},\rho-1\big)$; in $\rho=1$: $\lambda_1=-\beta$, $\lambda_2=-(1+\sigma)$, $\lambda_3=0$ (biforcazione), poi $\lambda_3>0$ e l'origine diventa una sella.
- In $\rho_H=\frac{\sigma(\sigma+\beta+3)}{\sigma-\beta-1}$ (con $\sigma>1+\beta$, come Lorenz) biforcazione di **Hopf** in $x^\pm$: $\lambda_1=-\sigma-\beta-1$, $\lambda_{2,3}=\pm i\sqrt{\frac{2\sigma(\sigma+1)}{\sigma-\beta-1}}$; per $\rho>\rho_H$ tutti e tre i punti fissi sono instabili.

## Intuizione
Dopo le biforcazioni l'attrattore è localmente un "libro di Cantor": una famiglia di superfici parametrizzata da un insieme di Cantor, cucite lungo la varietà instabile di un punto fisso instabile. Lorenz osservò che i massimi locali successivi di $z$ seguono una legge $z_{n+1}=f(z_n)$ che, normalizzata in $[0,1]$, è circa $\eta_{n+1}=2\eta_n\bmod1$: caotica, con esponente di Lyapunov $\ln2$.

## Come si usa
Esercizio tipico: calcolare divergenza, punti fissi, jacobiana e autovalori al variare di $\rho$, individuare i valori di biforcazione. In $\rho=1$ la riduzione alla varietà centrale usa la base di autovettori $(1,1,0)$, $(\sigma,-1,0)$, $(0,0,1)$.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/IntroToDynamicalSystems (1).pdf` (p. 22-26).

## Prerequisiti
- [[Flusso di un sistema dinamico]]: sistema $\dot x=F(x)$ in $\mathbb R^3$
- [[Matrice jacobiana]]: linearizzazione nei punti fissi
- [[Biforcazione]]: biforcazioni in $\rho=1$ e $\rho_H$

## Porta a
- [[Teorema della varietà centrale]]: esempio di riduzione in $\rho=1$

## Collegati
- [[Caos deterministico]]: transizione al caos
- [[Insiemi invarianti e attrattori]]: l'attrattore di Lorenz
- [[Esponente di Lyapunov]]: $\lambda=\ln2$ per la mappa dei massimi
