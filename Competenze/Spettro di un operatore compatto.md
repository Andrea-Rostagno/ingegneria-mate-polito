---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["spectrum of a compact operator", "spettro discreto", "autovalori di un operatore compatto", "accumulazione degli autovalori in zero", "teoria di Riesz-Schauder"]
tags: [competenza, area/analisi]
---

# Spettro di un operatore compatto

> Lo spettro di un operatore compatto su uno spazio di Hilbert è al più numerabile, fatto (fuori da 0) di autovalori di molteplicità finita, che possono accumularsi solo in 0.

## Definizione / enunciato
**Prop. 11.28.** Sia $T\in\mathcal K(H)$, $H\ne\{0\}$ di Hilbert.
(i) Se $\dim H=\infty$, allora $0\in\sigma(T)$.
(ii) $0<\dim\operatorname{Ker}(T-\lambda I)<\infty$ per ogni $\lambda\in\sigma(T)\setminus\{0\}$.
(iii) $\sigma(T)\setminus\{0\}\subseteq\sigma_p(T)$.
(iv) Per ogni $t>0$, $\#\{\lambda\in\sigma(T):|\lambda|\ge t\}<\infty$.
(v) $\sigma(T)$ è finito o numerabile, e nel secondo caso 0 è l'unico punto di accumulazione.
**Prop. 11.30.** Se $T\in\mathcal B(H)$ è autoaggiunto, $\|T\|_{op}\in\sigma(T)$ oppure $-\|T\|_{op}\in\sigma(T)$; se $\mathbb F=\mathbb C$ e $T$ è compatto e normale, esiste $\mu\in\sigma(T)$ con $|\mu|=\|T\|_{op}$.

## Formule chiave
(ii)-(iii): per $\lambda\ne0$, $I-\lambda^{-1}T=-\lambda^{-1}(T-\lambda I)$ è una perturbazione compatta dell'identità non invertibile, quindi (Fredholm) non iniettiva, con nucleo di dimensione finita.
(iv): se esistessero infiniti $\lambda_n$ distinti con $|\lambda_n|\ge t$, le somme $V_N$ dei primi $N$ autospazi formerebbero una catena strettamente crescente; scelti $y_N\in V_{N+1}\cap V_N^\perp$ unitari, si ha $P_{V_N^\perp}Ty_N=\lambda_Ny_N$ e quindi $\|Ty_N-Ty_M\|\ge d(Ty_N,V_N)=|\lambda_N|\ge t$ per $N>M$: $(Ty_N)$ non ha sottosuccessioni di Cauchy, contro la compattezza.

## Intuizione
È lo spettro di una "matrice diagonale con diagonale infinitesima": come per $D_w$ con $w\in c_0$, gli autovalori non nulli sono isolati e tendono a 0, e 0 è nello spettro perché un compatto non è invertibile in dimensione infinita.

## Come si usa
Es. 11.29: per $T_K$ su $L^2(0,1)$ con $K(x,y)=e^{x-y}$ basta trovare gli autovalori: $\sigma(T_K)=\{0\}\cup\sigma_p(T_K)=\{0,1\}$. La Prop. 11.30 garantisce l'esistenza di un autovalore di modulo massimo, il primo passo della dimostrazione del teorema spettrale.

## Nei corsi
- **Analisi funzionale** (triennale): §11.3 "Spettro di operatori compatti" (Prop. 11.28 con dimostrazione, Es. 11.29) e Prop. 11.30 in §11.4. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 177-180); `triennale/ANNO 3/analisi funzionale/10_operatoricompatti_handout.pdf` (p. 7).

## Prerequisiti
- [[Operatore compatto]]: T in K(H)
- [[Spettro di un operatore limitato]]: definizione e proprietà generali
- [[Alternativa di Fredholm]]: σ(T) \ {0} fatto di autovalori

## Porta a
- [[Teorema spettrale per operatori compatti]]: diagonalizzazione su autospazi

## Collegati
- [[Autovalori e autovettori]]: lo spettro non nullo è fatto di autovalori
- [[Operatore di moltiplicazione]]: modello con w in c_0
