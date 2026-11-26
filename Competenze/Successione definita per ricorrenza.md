---
tipo: competenza
area: algebra-geometria
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["recurrence relation", "definizione ricorsiva", "funzione definita ricorsivamente", "relazione di ricorrenza", "relazione ricorsiva", "condizioni iniziali di una ricorrenza", "ricorrenza di ordine k"]
tags: [competenza, area/algebra-geometria]
---

# Successione definita per ricorrenza

> Una successione si definisce dando i primi termini e una regola che calcola ogni termine dai precedenti. Il principio di induzione garantisce che così risulta definita per ogni $n$.

## Definizione / enunciato
**Proposizione** (lezione 5, pp. 2-3):
1. **Primo ordine.** Siano $f:\mathbb R\to\mathbb R$ e $c\in\mathbb R$. Il sistema
$$\begin{cases}a_0=c\\ a_{n+1}=f(a_n)\quad\forall n\in\mathbb N\end{cases}$$
definisce un'unica successione, cioè un'unica funzione $g:\mathbb N\to\mathbb R$ con $g(0)=c$ e $g(n+1)=f(g(n))$. Lo stesso vale se $f:A\to A$ e $c\in A$ per un qualsiasi insieme $A$.
2. **Non autonoma.** La regola può dipendere anche da $n$: $a_{n+1}=f(n,a_n)$.
3. **Ordine $k$.** Dati $c_0,\dots,c_{k-1}$, il sistema $a_0=c_0,\dots,a_{k-1}=c_{k-1}$, $a_{n+k}=f(n,a_n,\dots,a_{n+k-1})$ definisce un'unica successione. La relazione "va indietro" di $k$ passi.

**Dimostrazione (caso 1).** Sia $S=\{n\in\mathbb N:\ g(n)\text{ è definito}\}$. Si ha $0\in S$ perché $g(0)=c$. Se $n\in S$, allora $g(n+1)=f(g(n))$ è definito, quindi $n+1\in S$. Per induzione $S=\mathbb N$.

## Formule chiave
$$n!:\quad f(0)=1,\ f(n+1)=(n+1)\,f(n);\qquad f(0)=0,\ f(n+1)=f(n)+2\ \Rightarrow\ f(n)=2n.$$

## Intuizione
La ricorrenza descrive un'evoluzione a tempo discreto: anni, settimane, generazioni. I dati iniziali sono indispensabili: la sola relazione $a_n=\alpha a_{n-1}$ ha infinite soluzioni $A\alpha^n$. Il problema tipico è passare dalla forma ricorsiva a una **formula esplicita** e verificarla per induzione.

## Come si usa
- **Esempio della lezione 5:** ho 57 € e risparmio 10 € a settimana per un cellulare da 189 €. Il modello è $a_0=57$, $a_n=a_{n-1}+10$, quindi $a_n=57+10n$: bastano 14 settimane.
- **Iterare in avanti o all'indietro:** $a_n=a_{n-1}+10=a_{n-2}+2\cdot10=\dots=a_0+10n$.
- **Lezione 3:** la formula esplicita $f(n)=2n$ di $f(0)=0$, $f(n+1)=f(n)+2$ si verifica per induzione. Peano definisce somma e prodotto proprio in modo ricorsivo.
- **Due usi** (lezione 5, p. 1): descrivere evoluzioni a tempo discreto e contare insiemi descritti ricorsivamente.

## Nei corsi
- **Matematica discreta** (triennale): definizioni ricorsive nella lezione 3, proposizione generale all'inizio della lezione 5. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/03 -Insiemi equipotenti e cardinalitá.pdf` (p. 3); `triennale/ANNO 1/Matematica discreta/teoria/05 - Successioni ricorsive lineari.pdf` (pp. 1-3); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§3.1, p. 43).

## Prerequisiti
- [[Principio di induzione]]: dimostra che la successione è definita per ogni $n$

## Porta a
- [[Torre di Hanoi]]: il numero minimo di mosse soddisfa $M_{n+1}=2M_n+1$
- [[Relazioni ricorsive lineari del primo ordine]]: $f$ affine, con soluzione esplicita
- [[Relazioni ricorsive lineari omogenee]]: ordine $k$ lineare
- [[Punto di equilibrio di una successione ricorsiva]]: $f$ non lineare, studio qualitativo

## Collegati
- [[Problema di Cauchy]]: analogo continuo (equazione più dato iniziale). La lezione 5 confronta l'ordine $k$ con i sistemi di equazioni differenziali.
