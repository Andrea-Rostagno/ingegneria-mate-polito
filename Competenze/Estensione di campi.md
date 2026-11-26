---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["field extension", "E|F", "grado di un'estensione", "degree of a field extension", "[E:F]", "immersione di campi", "estensioni come spazi vettoriali"]
tags: [competenza, area/algebra-geometria]
---

# Estensione di campi

> $E$ estende $F$ se c'è un omomorfismo iniettivo $F\to E$. In tal caso $E$ è uno spazio vettoriale su $F$, e la sua dimensione $[E:F]$ è il grado dell'estensione.

## Definizione / enunciato
**Def. 1.** Siano $F$, $E$ campi. $E$ è un'**estensione** di $F$, scritta $E|F$, se esiste un omomorfismo iniettivo di campi $\varphi:F\to E$, detto **immersione**. Si identifica $F$ con il sottocampo $\varphi(F)\subseteq E$.

- **Campi primi:** ogni campo di caratteristica 0 estende $\mathbb Q$, e ogni campo di caratteristica $p$ estende $\mathbb Z_p$.
- **Oss. 2:** se $E|F$ tramite $\varphi$ e $L|E$ tramite $\psi$, allora $L|F$ tramite $\psi\circ\varphi$.
- **Prop. 3:** se $E|F$ è un'estensione, $E$ è in modo naturale uno spazio vettoriale su $F$.
- **Def. 4:** il **grado** $[E:F]$ è la dimensione di $E$ come spazio vettoriale su $F$.
- **Oss. 5:** $[E:F]=1\iff E=F$.

## Formule chiave
$$[E:F]=\dim_FE,\qquad [\mathbb C:\mathbb R]=2\ \ (\text{base }\{1,i\})$$

## Intuizione
Gli elementi di $E$ si possono moltiplicare per "scalari" di $F$, e gli assiomi di spazio vettoriale sono proprio quelli dell'anello $E$ ristretti a questo prodotto. L'algebra lineare diventa così uno strumento per contare: il grado misura quanto $E$ è più grande di $F$.

## Come si usa
Esempi delle dispense:
- $\mathbb R|\mathbb Q$, $\mathbb C|\mathbb R$ e $\mathbb C|\mathbb Q$ con le inclusioni naturali;
- ogni $a+ib$ si scrive in modo unico come $a\cdot1+b\cdot i$, quindi $[\mathbb C:\mathbb R]=2$;
- se $I$ è massimale in $K[x]$, il quoziente $E=K[x]/I$ è un campo ed estende $K$ tramite $a\mapsto a+I$;
- **conteggio degli elementi:** se $K$ è finito e $[K:\mathbb Z_p]=n$, allora $K\cong(\mathbb Z_p)^n$ come spazio vettoriale, quindi $|K|=p^n$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 33/34, "Campi e estensioni di campi". Fonti: `triennale/ANNO 2/istituzioni/Alg-14-12-22.pdf` (lezioni 33/34, pp. 2-4, 21).

## Prerequisiti
- [[Campo (struttura algebrica)]]: le estensioni sono tra campi
- [[Caratteristica di un anello]]: il campo primo $\mathbb Q$ o $\mathbb Z_p$ contenuto in ogni campo
- [[Spazio vettoriale]]: $E$ è uno spazio vettoriale su $F$
- [[Base e dimensione]]: il grado è una dimensione

## Porta a
- [[Polinomio minimo]]: elementi algebrici su $F$
- [[Estensione semplice]]: il più piccolo campo che contiene $F$ e un elemento
- [[Campo finito]]: estensione di grado $n$ di $\mathbb Z_p$

## Collegati
- [[Numeri complessi]]: $\mathbb C$ è un'estensione di grado 2 di $\mathbb R$
