---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["field (algebra)", "campo algebrico", "corpo commutativo", "sottocampo", "subfield", "K^*"]
tags: [competenza, area/algebra-geometria]
---

# Campo (struttura algebrica)

> Un anello commutativo con unità in cui ogni elemento non nullo è invertibile, cioè un "corpo commutativo". Esempi: $\mathbb Q$, $\mathbb R$, $\mathbb C$ e $\mathbb Z_p$ con $p$ primo.

## Definizione / enunciato
Un anello commutativo con unità $K$ è un **campo** se ogni elemento diverso da $0$ ha inverso moltiplicativo (Def. 1). Si scrive $K^*=K\setminus\{0\}$, che è un gruppo moltiplicativo.

Un **sottocampo** di $A$ è un sottoinsieme non vuoto che è un campo con le operazioni ristrette (Def. 23).

Risultati:
- **Cor. 13:** ogni campo è un dominio di integrità.
- **Prop. 15, Cor. 16:** la caratteristica di un campo è $0$ o un primo. Se $n$ non è primo, $\mathbb Z_n$ non è un campo.
- **Cor. 4 (`Alg-30-11-22`):** $\mathbb Z_p$ è un campo $\iff p$ è primo.
- **Prop. 1 (lezioni 20-21):** un campo non ha ideali propri. Se $0\neq a\in I$, allora $1=a^{-1}a\in I$ e quindi $I=K$.
- **Cor. 3:** di conseguenza tutti gli omomorfismi di campi sono iniettivi.

## Formule chiave
$$K\ \text{campo}\iff K^*=K\setminus\{0\}\ \text{è un gruppo per}\ \cdot\qquad\Longrightarrow\qquad ab=0\Rightarrow a=0\ \vee\ b=0$$

## Intuizione
In un campo si può dividere per ogni elemento non nullo, quindi un'equazione $ax=b$ con $a\neq0$ ha sempre una e una sola soluzione. Gli unici ideali sono $\{0\}$ e $K$: un campo è "rigido", e un morfismo non può collassarne una parte.

## Come si usa
- **Riconoscere un campo:** si mostra che il quoziente di un anello per un ideale massimale è un campo. Esempi: $\mathbb Z/(p)=\mathbb Z_p$, $K[x]/(p(x))$ con $p$ irriducibile, $\mathbb R[x]/(x^2+1)\simeq\mathbb C$.
- **Sottocampi:** $\mathbb Q[\sqrt2]=\{a+b\sqrt2\mid a,b\in\mathbb Q\}$ è un sottocampo di $\mathbb R$; $\mathbb C\subseteq\mathbb H$ è un sottocampo dei quaternioni.
- **Sottocampo primo:** ogni campo di caratteristica 0 contiene una copia di $\mathbb Q$, e ogni campo di caratteristica $p$ una copia di $\mathbb Z_p$.

## Nei corsi
- **Istituzioni algebra** (triennale): definito nelle lezioni 17-18 come caso particolare di anello, poi usato in tutto il corso. Fonti: `triennale/ANNO 2/istituzioni/Alg-02-10-22-1.pdf` (lezioni 17-18, pp. 2-3, 12-13); `triennale/ANNO 2/istituzioni/Alg-07-10-22.pdf` (lezione 19, pp. 7-9); `triennale/ANNO 2/istituzioni/Alg-09-11-22.pdf` (lezioni 20-21, p. 3); `triennale/ANNO 2/istituzioni/Alg-30-11-22.pdf` (lezioni 25-26, pp. 18-19).

## Prerequisiti
- [[Anello]]: un campo è un anello commutativo con unità

## Porta a
- [[Estensione di campi]]: campi contenuti in campi più grandi
- [[Campo finito]]: campi con un numero finito di elementi

## Collegati
- [[Dominio di integrità]]: ogni campo è un dominio, non viceversa ($\mathbb Z$)
- [[Classi di resto modulo n]]: $\mathbb Z_p$ è un campo se e solo se $p$ è primo
- [[Ideale]]: un campo non ha ideali propri
- [[Ideali primi e massimali]]: $A/M$ è un campo se e solo se $M$ è massimale
- [[Spazio vettoriale]]: gli scalari di uno spazio vettoriale formano un campo
- [[Assiomi dei numeri reali]]: $\mathbb R$ è un campo ordinato
