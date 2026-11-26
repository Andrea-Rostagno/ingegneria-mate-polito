---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["normal modes", "modi normali", "normal mode of oscillation", "frequenze proprie", "pulsazioni proprie", "eigenfrequencies", "equazione delle pulsazioni proprie", "modo normale lineare", "modo normale iperbolico"]
tags: [competenza, area/fisica]
---

# Modi normali di oscillazione

> Le soluzioni delle equazioni linearizzate $A^0\ddot\eta=B^0\eta$ in cui tutte le coordinate oscillano con la stessa frequenza; la soluzione generale è una loro sovrapposizione.

## Definizione / enunciato
Si cercano soluzioni $\eta=\eta_0e^{\lambda t}$ di $A^0\ddot\eta=B^0\eta$ (8.40):
$$(B^0-\lambda^2A^0)\eta_0=\mathbf 0\qquad(8.41),$$
che ha soluzioni non nulle se e solo se $\det(B^0-\lambda^2A^0)=0$. Dato che le matrici sono simmetriche (e $A^0$ è definita positiva), $\lambda^2\in\mathbb R$ e gli autovettori di $B^0$ rispetto ad $A^0$ formano una base di $\mathbb R^N$.

## Formule chiave
- $\lambda^2<0$, $\omega=\sqrt{-\lambda^2}$: **modo normale** $\eta(t)=\eta_0(C_1\cos\omega t+C_2\sin\omega t)$ (8.42).
- $\lambda^2=0$: **modo normale lineare** $\eta(t)=\eta_0(C_1+C_2t)$.
- $\lambda^2>0$: **modo normale iperbolico** $\eta(t)=\eta_0(C_1e^{\lambda t}+C_2e^{-\lambda t})$.

Soluzione generale (8.43): somma dei modi dei tre tipi, con $2N$ costanti fissate dalle condizioni iniziali.
Manoscritto: $\det(\omega^2A(q^*)+H(q^*))=0$, equivalente a $\det(\omega^2I-K(q^*))=0$ con $K=-A^{-1}H$ (formula di Binet); le $\omega^2$ sono gli autovalori di $K$, tutti positivi se $q^*$ è stabile.

## Intuizione
Se la condizione iniziale è parallela a un modo normale, il moto resta per sempre in quel modo. Se tutti i $\lambda_k^2$ sono negativi, l'ipotesi di piccole oscillazioni vale per ogni tempo; un solo $\lambda^2>0$ la rende subito falsa.

## Come si usa
**Lect7, Ex5** (doppia asta in $(0,0)$): $A(0,0)=\begin{pmatrix}\frac{16}3ml^2&2ml^2\\2ml^2&\frac43ml^2\end{pmatrix}$, $H(0,0)=\begin{pmatrix}-3mgl&0\\0&-mgl\end{pmatrix}$, quindi il sistema è $\frac{16}3ml^2\ddot\eta_1+2ml^2\ddot\eta_2=-3mgl\,\eta_1$ e $2ml^2\ddot\eta_1+\frac43ml^2\ddot\eta_2=-mgl\,\eta_2$. Le frequenze si ottengono da $\det(H-\lambda^2A)=0$; il testo non le calcola.

## Nei corsi
- **Meccanica** (triennale): fonti `triennale/ANNO 2/Meccanica/Lect7-Lagrangian (2).pdf` (pp. 88-89, 92, eqq. 8.40-8.43; numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` (pp. 170-171, matrice di rigidezza).

## Prerequisiti
- [[Piccole oscillazioni attorno all'equilibrio]]: equazioni linearizzate A⁰η'' = B⁰η
- [[Autovalori e autovettori]]: problema agli autovalori generalizzato
- [[Matrice simmetrica definita positiva]]: A⁰ garantisce λ² reali
- [[Energia cinetica in coordinate lagrangiane]]: A⁰ è la matrice di massa nell'equilibrio

## Porta a
- Nessuno.

## Collegati
- [[Forma quadratica]]: T e U linearizzate sono forme quadratiche
- [[Matrice diagonalizzabile]]: base di autovettori per le matrici simmetriche
