---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["group", "gruppo abeliano", "abelian group", "gruppo commutativo", "elemento neutro", "identity element", "potenza di un elemento", "multiplo di un elemento", "leggi di semplificazione"]
tags: [competenza, area/algebra-geometria]
---

# Gruppo

> Un insieme con un'operazione associativa, un elemento neutro e gli inversi. È la struttura algebrica di base su cui il corso costruisce anelli, campi e simmetrie.

## Definizione / enunciato
**Def. 6.** Un gruppo $(G,\star)$ è un insieme $G$ con un'operazione $\star$ tale che:
- **associativa**: $x\star(y\star z)=(x\star y)\star z$;
- **elemento neutro**: esiste $u$ con $x\star u=u\star x=x$ per ogni $x$;
- **inverso**: per ogni $x$ esiste $x'$ con $x\star x'=x'\star x=u$.

È **abeliano** se $x\star y=y\star x$ per ogni $x,y$ (Def. 9).

Proprietà dimostrate:
- il neutro è unico (Prop. 7) e l'inverso è unico (Prop. 8);
- valgono le **leggi di semplificazione** $ab=ac\Rightarrow b=c$ e $ba=ca\Rightarrow b=c$;
- **Prop. 12**: $1^{-1}=1$, $(a^{-1})^{-1}=a$, $(ab)^{-1}=b^{-1}a^{-1}$.

Notazione moltiplicativa: $\cdot$, $1$, $x^{-1}$. Notazione additiva, per gruppi abeliani: $+$, $0$, $-x$.

## Formule chiave
$$a^m=\begin{cases}a\cdots a\ (m\text{ volte}) & m>0\\ 1 & m=0\\ (a^{-m})^{-1} & m<0\end{cases}\qquad a^na^m=a^{n+m},\quad (a^n)^m=a^{nm}$$
Se $G$ è abeliano vale anche $(ab)^m=a^mb^m$ (Prop. 14). In notazione additiva le potenze diventano multipli $ma$.

## Intuizione
Un gruppo descrive trasformazioni che si possono comporre e disfare, come le simmetrie di una figura. L'assenza della commutatività è la regola, non l'eccezione: in $GL(n,\mathbb R)$ e in $S_n$ l'ordine dei fattori conta.

## Come si usa
Esempi delle lezioni:
- **abeliani**: $(\mathbb Z,+)$, $(\mathbb Q,+)$, $(\mathbb R,+)$, $(\mathbb C,+)$; $(\mathbb Q^*,\cdot)$, $(\mathbb R^*,\cdot)$, $(\mathbb C^*,\cdot)$, $(\mathbb R_{>0},\cdot)$; $(\mathbb Z_n,+)$; $(K[x],+)$;
- **non abeliani**: $GL(n,\mathbb R)$ con il prodotto righe per colonne; le biiezioni $\mathcal B(X)$ con la composizione; $S_n$; i gruppi diedrali $\Delta_n$;
- **non gruppi**: $(\mathbb N,+)$, perché mancano gli opposti, e $(\mathbb R,\cdot)$, perché $0$ non ha inverso.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 4-5, "Gruppi: definizione e prime proprietà". Fonti: `triennale/ANNO 2/istituzioni/Alg-05-10-22.pdf` (lezioni 4-5, pp. 2-13).

## Prerequisiti
- [[Funzione composta e funzione inversa]]: le biiezioni di un insieme formano il gruppo $\mathcal B(X)$
- [[Inversa destra e inversa sinistra]]: nel gruppo $\mathcal B(X)$ l'inverso è a destra e a sinistra

## Porta a
- [[Sottogruppo]]: sottoinsiemi che sono gruppi
- [[Omomorfismo di gruppi]]: funzioni che rispettano l'operazione
- [[Gruppo simmetrico]]: il gruppo delle permutazioni
- [[Gruppo diedrale]]: il gruppo delle isometrie di un poligono
- [[Classi di resto modulo n]]: $(\mathbb Z_n,+)$ e $\mathbb Z_p^*$
- [[Anello]]: un anello è un gruppo abeliano additivo con un prodotto

## Collegati
- [[Spazio vettoriale]]: $(V,+)$ è un gruppo abeliano
