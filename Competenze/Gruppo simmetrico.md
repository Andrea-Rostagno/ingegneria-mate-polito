---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["symmetric group", "S_n", "gruppo simmetrico di grado n", "permutazione di un insieme", "ciclo", "cycle", "trasposizione", "transposition", "cicli disgiunti", "decomposizione in cicli"]
tags: [competenza, area/algebra-geometria]
---

# Gruppo simmetrico

> Il gruppo $S_n$ delle permutazioni di $\{1,\dots,n\}$ con la composizione. Ogni permutazione si scrive in modo unico come prodotto di cicli disgiunti.

## Definizione / enunciato
Una **permutazione** è una biiezione $\sigma:I_n\to I_n$, con $I_n=\{1,\dots,n\}$. Le permutazioni formano il **gruppo simmetrico** $(S_n,\circ)$, indicato anche $\mathfrak S_n$ o $\Sigma_n$. Si scrive
$$\sigma=\begin{pmatrix}1&2&\cdots&n\\ \sigma(1)&\sigma(2)&\cdots&\sigma(n)\end{pmatrix},\qquad |S_n|=n!.$$

**Cicli** (Def. 12):
- $(a_1\,a_2\dots a_k)$ manda $a_i\mapsto a_{i+1}$ e $a_k\mapsto a_1$, e lascia fissi gli altri elementi: è un **ciclo di lunghezza $k$**;
- un ciclo di lunghezza 2 è una **trasposizione**;
- due cicli sono **disgiunti** se muovono insiemi di elementi disgiunti.

Risultati:
- **Prop. 13:** ogni permutazione è un prodotto finito di cicli disgiunti, in modo unico a meno dell'ordine.
- **Cor. 14:** se i cicli hanno lunghezze $\ell_1,\dots,\ell_r$, allora $\mathrm{ord}(\sigma)=\mathrm{m.c.m.}(\ell_1,\dots,\ell_r)$.
- **Prop. 15:** ogni permutazione è un prodotto di trasposizioni, perché
$$(a_1\dots a_k)=(a_1a_k)(a_1a_{k-1})\cdots(a_1a_3)(a_1a_2).$$

## Formule chiave
$$|S_n|=n!,\qquad \mathrm{ord}(\gamma_1\cdots\gamma_r)=\mathrm{m.c.m.}(\ell_1,\dots,\ell_r)$$

## Intuizione
Per trovare i cicli si segue l'orbita $a,\sigma(a),\sigma^2(a),\dots$ finché si torna ad $a$, poi si ricomincia da un elemento non ancora visto. $|S_n|=n!$ perché $1$ ha $n$ immagini possibili, $2$ ne ha $n-1$, e così via.

## Come si usa
Esempi delle lezioni:
- in $S_5$: $\begin{pmatrix}1&2&3&4&5\\2&5&4&3&1\end{pmatrix}=(125)(34)$;
- in $S_8$: $\tau=(13572)(48)$ ha ordine $\mathrm{m.c.m.}(5,2)=10$;
- in $S_4$: $(243)(13)=(1243)$ ma $(13)(243)=(1324)$, quindi i cicli in generale non commutano; i cicli disgiunti invece commutano;
- $(124563)=(13)(16)(15)(14)(12)$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 4-5 (definizione) e 8-9 (cicli). Fonti: `triennale/ANNO 2/istituzioni/Alg-05-10-22.pdf` (lezioni 4-5, pp. 6-8; p. 8 in parte illeggibile); `triennale/ANNO 2/istituzioni/Alg-12-10-22.pdf` (lezioni 8-9, pp. 7-12).

## Prerequisiti
- [[Gruppo]]: $S_n$ è un gruppo con la composizione

## Porta a
- [[Segno di una permutazione]]: parità del numero di trasposizioni
- [[Teorema di Cayley]]: ogni gruppo finito è un sottogruppo di un $S_n$

## Collegati
- [[Ordine di un elemento]]: ordine come m.c.m. delle lunghezze dei cicli
- [[Gruppo diedrale]]: $\Delta_3\cong S_3$, e in generale $\Delta_n$ si immerge in $S_n$
- [[Matrice di permutazione]]: rappresentazione matriciale delle permutazioni
- [[Calcolo combinatorio]]: le permutazioni di $n$ oggetti sono $n!$
