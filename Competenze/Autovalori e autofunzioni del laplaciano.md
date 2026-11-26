---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["eigenvalues of the Laplacian", "Laplacian eigenfunctions", "coppie autovalore-autofunzione di −Δ", "autovalori di Dirichlet", "autovalori di Neumann", "problema agli autovalori per il laplaciano"]
tags: [competenza, area/analisi]
---

# Autovalori e autofunzioni del laplaciano

> Le funzioni $\varphi_k\ne0$ con $-\Delta\varphi_k=\lambda_k\varphi_k$ e condizioni omogenee al bordo: formano una base di $L^2(\Omega)$ e sono il "sistema di coordinate" delle soluzioni per serie.

## Definizione / enunciato
**Dirichlet omogeneo** (L24 p. 4): $-\Delta\varphi_k=\lambda_k\varphi_k$ in $\Omega$, $\varphi_k=0$ su $\partial\Omega$. **Teorema:** esistono coppie $(\lambda_k,\varphi_k)$, $\varphi_k\ne0$; i $\lambda_k$ sono reali non negativi con $\lambda_k\to+\infty$, le $\varphi_k$ formano una base di $L^2(\Omega)$, e "ciascun $\lambda_k$ ha molteplicità algebrica e geometrica unitaria" (così enunciato a lezione; per un $\Omega$ generico in più dimensioni gli autovalori possono essere multipli, osservazione nostra).
**Neumann omogeneo** (L28 p. 4): $-\Delta\varphi_k=\lambda_k\varphi_k$, $\partial\varphi_k/\partial n=0$ su $\partial\Omega$. Teorema: esistono coppie $(\lambda_k,\varphi_k)$, $\varphi_k\not\equiv0$, con $\lambda_k\in\mathbb R$, $\lambda_k\ge0$, e le $\varphi_k$ formano una base di $L^2(\Omega)$. Inoltre $\lambda_0=0$ con autofunzione $\varphi_0\equiv1$ e $\lambda_k>0$ per $k>0$ (L28 p. 5).
Le autofunzioni sono ortogonali in $L^2$: $(\varphi_k,\varphi_h)=\int_\Omega\varphi_k\varphi_h=0$ per $h\ne k$ (L25 p. 4).

## Formule chiave
Su $\Omega=(0,1)$, da $\varphi''+\lambda\varphi=0$, $\varphi=C_1e^{i\sqrt\lambda x}+C_2e^{-i\sqrt\lambda x}$, imponendo che il sistema per $(C_1,C_2)$ abbia matrice singolare:
- Dirichlet: $\sin\sqrt{\lambda_k}=0$, $\lambda_k=k^2\pi^2$, $\varphi_k(x)=\sin(k\pi x)$, $k\ge1$ (L24 pp. 5-6; L25 p. 2);
- Neumann: $\lambda_k\sin\sqrt{\lambda_k}=0$, $\lambda_k=k^2\pi^2$, $\varphi_k(x)=\cos(k\pi x)$, $k\ge0$ (L29 pp. 1-2).
Gli autovalori coincidono, le autofunzioni no (seni contro coseni), e con Neumann c'è anche $\lambda_0=0$.

## Intuizione
È l'analogo infinito-dimensionale della diagonalizzazione di una matrice simmetrica: nella base $\{\varphi_k\}$ l'operatore $-\Delta$ agisce come moltiplicazione per $\lambda_k$, e una PDE lineare diventa una famiglia di ODE indipendenti.

## Come si usa
Si calcolano le $\varphi_k$ per il dominio e le condizioni al bordo dati, poi si sviluppano dato iniziale e soluzione. I coefficienti si ottengono per proiezione: $\hat u_{0,k}=\frac{(u_0,\varphi_k)}{\|\varphi_k\|^2_{L^2}}$.

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonti `triennale/ANNO 3/eq fisica matematica/24 - Lezione 05_12_23.pdf` (pp. 3-7); `triennale/ANNO 3/eq fisica matematica/25 - Lezione 06_12_23.pdf` (pp. 2, 4); `triennale/ANNO 3/eq fisica matematica/28 - Lezione 15_12_23.pdf` (p. 4); `triennale/ANNO 3/eq fisica matematica/29 - Lezione 19_12_23.pdf` (pp. 1-2). In L24 p. 5 l'indice di Dirichlet è scritto da $k=0$ (svista: dà $\varphi_0=0$); in L25 parte da $k=1$.

## Prerequisiti
- [[Problema ai limiti]]: condizioni omogenee di Dirichlet o Neumann
- [[Spazio di Hilbert]]: le autofunzioni sono una base ortogonale di L²(Ω)
- [[Autovalori e autovettori]]: analogo matriciale

## Porta a
- [[Soluzione per serie di autofunzioni]]: base in cui sviluppare la soluzione

## Collegati
- [[Serie di Fourier]]: in 1D le autofunzioni sono seni e coseni
