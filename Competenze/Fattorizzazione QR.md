---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Metodi numerici]
livello: [triennale]
aliases: ["QR decomposition", "A = QR", "fattorizzazione QR ridotta"]
tags: [competenza, area/numerica]
---

# Fattorizzazione QR

> Fattorizzazione $A=QR$ con $Q$ ortogonale e $R$ triangolare superiore, valida per ogni matrice rettangolare.

## Definizione / enunciato
**Teorema.** Ogni $A\in\mathbb R^{m,n}$ si fattorizza come $A=QR$ con $Q\in\mathbb R^{m,m}$ ortogonale e $R\in\mathbb R^{m,n}$ con $r_{ij}=0$ per $i>j$. Le colonne di $Q$ sono a due a due ortogonali. In generale la fattorizzazione **non è unica**.

**Teorema.** Se $A\in\mathbb R^{m,n}$, $m\ge n$, ha rango massimo $n$, allora $R=\binom{\tilde R}{O}$ con $\tilde R$ triangolare superiore non singolare, e $A$ si scrive in un unico modo come
$$A=\tilde Q\tilde R,$$
con $\tilde Q\in\mathbb R^{m,n}$ a colonne ortonormali e $\tilde R\in\mathbb R^{n,n}$ triangolare superiore non singolare con diagonale positiva.

## Formule chiave
$$Ax=b\iff QRx=b\iff Rx=Q^Tb\qquad(A\in\mathbb R^{n,n}\ \text{non singolare})$$
Matlab: `[Q,R] = qr(A)`.

## Intuizione
Si triangolarizza $A$ con una trasformazione ortogonale, che non amplifica gli errori; il prezzo è un costo maggiore di $PA=LU$.

## Come si usa
Per un sistema quadrato $QR$ conviene solo se i fattori sono già noti, perché calcolarli costa più di $PA=LU$. Le applicazioni vere sono i sistemi sovradeterminati (minimi quadrati) e il metodo QR per gli autovalori.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 86-90, 100); `triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 45).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): solo un cenno, come algoritmo stabile per $A\mathbf x=\mathbf b$ ($R\mathbf x=Q^T\mathbf b$) ma con costo $2n^3/3$ contro $n^3/3$ del metodo di Gauss e della fattorizzazione LU, che restano la scelta standard; `[Q,R]=qr(A)`. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 32).

## Prerequisiti
- [[Matrice ortogonale]]: il fattore Q è ortogonale

## Porta a
- [[Minimi quadrati con QR]]: A = QR con R = (R~; O)
- [[Metodo QR per autovalori]]: A_k = Q_k R_k a ogni passo

## Collegati
- [[Metodo di eliminazione di Gauss]]: per $A\mathbf x=\mathbf b$ QR è stabile ma costa $2n^3/3$ contro $n^3/3$ (Metodi numerici)
- [[Fattorizzazione LU]]: fattorizzazione standard per sistemi quadrati, di costo metà (Metodi numerici)
- [[Matrici a blocchi]]: fattore R scritto come (R~; O)
- [[Procedimento di Gram-Schmidt]]: A = QR è Gram-Schmidt sulle colonne di A, scritto in forma matriciale (collegamento concettuale, non nelle slide)
