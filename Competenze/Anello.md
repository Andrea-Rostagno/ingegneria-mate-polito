---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["ring", "anello con unità", "anello unitario", "unital ring", "anello commutativo", "commutative ring", "corpo", "division ring", "skew field", "quaternioni", "quaternions", "regola dei segni", "anello di Boole", "Boolean ring", "elementi invertibili di un anello", "unità di un anello"]
tags: [competenza, area/algebra-geometria]
---

# Anello

> Un gruppo abeliano additivo con un prodotto associativo e distributivo. È la struttura di $\mathbb Z$, dei polinomi e delle matrici.

## Definizione / enunciato
**Def. 1.** Un anello $(A,+,\cdot)$ è un insieme con due operazioni tali che:
1. $(A,+)$ è un gruppo abeliano, con neutro $0$;
2. $\cdot$ è associativa;
3. valgono le distributive $a(b+c)=ab+ac$ e $(a+b)c=ac+bc$.

Terminologia:
- $A$ è **con unità** (unitario) se esiste un neutro $1$ per il prodotto;
- gli elementi con inverso moltiplicativo si dicono **invertibili** (o unitari);
- $A$ è **commutativo** se lo è il prodotto;
- un anello con unità è un **corpo** se ogni $a\neq0$ è invertibile.

Proprietà dimostrate (Prop. 3-8, 12):
- $0$, $-a$, $1$ e $a^{-1}$ sono unici; vale la semplificazione per la somma;
- $a\cdot0=0\cdot a=0$, e se $A\neq\{0\}$ allora $0\neq1$;
- **regola dei segni**: $(-a)b=a(-b)=-(ab)$, $(-a)(-b)=ab$, $(-1)a=-a$;
- $n(ab)=(na)b=a(nb)$;
- **Prop. 12:** gli invertibili formano un gruppo moltiplicativo $A^*$, con $(ab)^{-1}=b^{-1}a^{-1}$.

La semplificazione per il **prodotto** invece non vale in generale: in $\mathbb Z_{12}$, $\bar6\bar2=\bar6\bar4$ ma $\bar2\neq\bar4$.

## Formule chiave
$$a\cdot0=0,\qquad (-a)(-b)=ab,\qquad (a+b)^n=\sum_{i=0}^n\binom ni a^ib^{n-i}$$
Le dispense (Prop. 9) enunciano il binomio in un anello qualsiasi. La commutatività serve, ma non è visibile nel testo stampato (da verificare sul PDF).

## Intuizione
Un anello è un posto dove si sa sommare, sottrarre e moltiplicare, ma non necessariamente dividere. Le equazioni $ax=b$ possono non avere soluzioni ($2x=3$ in $\mathbb Z$) o averne più d'una ($\bar3x=\bar0$ in $\mathbb Z_6$).

## Come si usa
Esempi delle lezioni:
- $\mathbb Z$ e $\mathbb Z_n$ sono commutativi; $\mathbb Q$, $\mathbb R$, $\mathbb C$ e $\mathbb Z_p$ sono campi;
- $\mathbb Z[x]$, $\mathbb R[x]$ e $\mathbb Z_n[x]$ sono commutativi con unità;
- le matrici $M(n,A)$ formano un anello non commutativo;
- **quaternioni** $\mathbb H$: base $\{1,i,j,k\}$ con $i^2=j^2=k^2=-1$, $ij=-ji=k$, $jk=-kj=i$, $ki=-ik=j$. Sono un corpo che non è un campo;
- **funzioni** $\mathbb R^{\mathbb R}$ con somma e prodotto puntuali: gli invertibili sono le funzioni mai nulle;
- **anello di Boole** $\mathcal P(X)$ con $A+B=(A\setminus B)\cup(B\setminus A)$ e $AB=A\cap B$, con zero $\emptyset$ e unità $X$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 17-18, "Anelli: definizioni e prime proprietà". La p. 4 è molto sbiadita. Fonti: `triennale/ANNO 2/istituzioni/Alg-02-10-22-1.pdf` (lezioni 17-18 del 02/11/22, pp. 2-14).

## Prerequisiti
- [[Gruppo]]: $(A,+)$ è un gruppo abeliano

## Porta a
- [[Campo (struttura algebrica)]]: anello commutativo con tutti gli inversi
- [[Dominio di integrità]]: anello senza divisori dello zero
- [[Omomorfismo di anelli]]: funzioni che rispettano somma e prodotto
- [[Sottoanello]]: sottoinsiemi chiusi per le operazioni
- [[Ideale]]: sottoinsiemi assorbenti per il prodotto
- [[Anello dei polinomi]]: $A[x]$ costruito su un anello commutativo

## Collegati
- [[Prodotto di matrici]]: $M(n,A)$ è l'esempio tipico di anello non commutativo
