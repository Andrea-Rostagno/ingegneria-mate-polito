---
tipo: competenza
area: numerica
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["QR algorithm", "QR iteration", "metodo QR", "algoritmo QR"]
tags: [competenza, area/numerica]
---

# Metodo QR per autovalori

> Iterazione $A_k=Q_kR_k$, $A_{k+1}=R_kQ_k$ di matrici simili che converge a una forma (quasi) triangolare con gli autovalori in diagonale.

## Definizione / enunciato
Posto $A_1=A$, per $k=1,2,\dots$ si calcola $A_k=Q_kR_k$ ($Q_k$ ortogonale, $R_k$ triangolare superiore) e si pone
$$A_{k+1}=R_kQ_k=Q_k^TA_kQ_k.$$
Le $A_k$ sono tutte simili ad $A$ (e simmetriche se $A$ lo è). Sotto opportune ipotesi $A_k\to A_\infty$:
- $A$ simmetrica: $A_\infty$ diagonale con gli autovalori;
- $A$ non simmetrica con autovalori reali: $A_\infty$ triangolare superiore con gli autovalori in diagonale;
- autovalori complessi coniugati: $A_\infty$ quasi triangolare, con blocchi $1\times1$ (autovalori reali) e $2\times2$ (coppie complesse).

## Formule chiave
$$A_{k+1}=R_kQ_k=Q_k^TQ_kR_kQ_k=Q_k^TA_kQ_k$$

## Intuizione
È il metodo più efficiente e usato per calcolare tutti gli autovalori: trasformazioni ortogonali (stabili) che svuotano progressivamente la parte sotto la diagonale senza cambiare lo spettro.

## Come si usa
La versione base converge se gli autovalori sono tutti distinti in modulo. Function `qr_base(A,tol,m_max)`: `[Q,R] = qr(A); A = R*Q;` finché `norm(tril(A,-1),inf) <= tol`, poi `d = diag(A)`. Il metodo QR è alla base di `eig` in Matlab.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 45-49).

## Prerequisiti
- [[Fattorizzazione QR]]: A_k = Q_k R_k a ogni passo
- [[Matrici simili]]: le A_k sono simili ad A

## Porta a
- Nessuno.

## Collegati
- [[Metodo delle potenze]]: tutti gli autovalori contro uno solo
