---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["mollifier", "mollificatore", "mollificatore di Friedrichs", "regolarizzazione per convoluzione", "mollification", "densità di C_c^∞ in L^p"]
tags: [competenza, area/analisi]
---

# Mollificatori

> Successione di funzioni lisce, positive, di massa 1 e supporto che si restringe all'origine: convolvendo con esse si approssima qualunque funzione con funzioni $C^\infty$.

## Definizione / enunciato
**Def. 4.2.1.** Una successione di mollificatori è $\{\rho_k\}$, $\rho_k:\mathbb R^n\to\mathbb R$, con
(M1) $\rho_k\in C_c^\infty(\mathbb R^n)$; (M2) $\operatorname{spt}\rho_k\subset B_{1/k}$; (M3) $\int_{\mathbb R^n}\rho_k=1$; (M4) $\rho_k\ge0$.
Si costruiscono riscalando una funzione con (M1)-(M4) (mollificatore di Friedrichs, citato ma non scritto negli appunti).

**Regolarità della convoluzione** (Teor. 4.1.9): se $f\in C^k_c(\mathbb R^n)$ e $g\in L^1_{\rm loc}(\mathbb R^n)$, allora $f*g\in C^k(\mathbb R^n)$ e $D^\alpha(f*g)=(D^\alpha f)*g$ per $|\alpha|\le k$ (4.7); con $f\in C^\infty_c$ si ha $f*g\in C^\infty$.

**Approssimazione.**
- Prop. 4.2.2: se $f\in C(\mathbb R^n)$, $\rho_k*f\to f$ uniformemente sui compatti.
- Teor. 4.2.3: se $f\in L^p(\mathbb R^n)$, $1\le p<\infty$, allora $\rho_k*f\to f$ in $L^p(\mathbb R^n)$.
- Cor. 4.2.4: $C_c^\infty(\Omega)$ è denso in $L^p(\Omega)$ per $1\le p<\infty$.

## Formule chiave
$$(\rho_k*f)(x)-f(x)=\int_{B_{1/k}}[f(x-y)-f(x)]\rho_k(y)\,dy\ \Rightarrow\ |(\rho_k*f)(x)-f(x)|\le\varepsilon\ \text{ se }k>1/\delta .$$
Per $L^p$: $\|\rho_k*f-f\|_p\le2\|f-f_1\|_p+\|\rho_k*f_1-f_1\|_p$ con $f_1\in C_c$ vicina a $f$ (Young e (M3)-(M4)). Per $\Omega$ si usano compatti invadenti $K_k=\{|x|\le k,\ \operatorname{dist}(x,\mathbb R^n\setminus\Omega)\ge2/k\}$ e $f_k=\rho_k*(\tilde f\chi_{K_k})\in C_c^\infty(\Omega)$.

## Intuizione
$\rho_k*f$ sostituisce a ogni valore la media pesata di $f$ in una pallina di raggio $1/k$: la media eredita la regolarità di $\rho_k$ (le derivate cadono sul nucleo) e, al restringersi della pallina, torna a $f$.

## Come si usa
- Regolarità delle armoniche (Lemma 3.1.4): con mollificatori radiali $u*\psi_\varepsilon=u$ per la proprietà di media, quindi $u\in C^\infty$.
- Lemma di Weyl e lemma fondamentale del calcolo delle variazioni (versione $L^1_{\rm loc}$).
- Negli spazi di Sobolev (Evans §5.3): $u^\varepsilon=\eta_\varepsilon*u$ in $U_\varepsilon$ ha $D^\alpha u^\varepsilon=\eta_\varepsilon*D^\alpha u$ e $u^\varepsilon\to u$ in $W^{k,p}_{\rm loc}$.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §4.1 (Prop. 4.1.6-4.1.8, Teor. 4.1.9), §4.2 "Applicazioni della convoluzione" (Def. 4.2.1, Prop. 4.2.2, Teor. 4.2.3, Cor. 4.2.4); in Evans i mollificatori sono $\eta_\varepsilon$ (§C.4, usati in §5.3). Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 42-46); `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 250-251).

## Prerequisiti
- [[Convoluzione]]: la regolarizzata è una convoluzione
- [[Disuguaglianza di Young per la convoluzione]]: stima $\|\rho_k*g\|_p\le\|g\|_p$
- [[Funzioni test]]: i $\rho_k$ sono funzioni test

## Porta a
- [[Lemma fondamentale del calcolo delle variazioni]]: versione per $L^1_{\rm loc}$
- [[Lemma di Weyl]]: regolarizzazione di una soluzione distribuzionale
- [[Approssimazione con funzioni lisce negli spazi di Sobolev]]: mollificazione in $W^{k,p}$
- [[Teorema di Rellich-Kondrachov]]: le regolarizzate sono equicontinue

## Collegati
- [[Sottospazi densi di Lp]]: densità di $C_c^\infty$ in $L^p$
- [[Proprietà di media delle funzioni armoniche]]: con nuclei radiali la media è invariante
