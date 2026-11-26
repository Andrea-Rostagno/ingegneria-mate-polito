---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["properties of exponents and logarithms", "proprietà dei logaritmi", "proprietà delle potenze", "logaritmo", "logarithm", "cambio di base esponenziale"]
tags: [competenza, area/analisi]
---

# Proprietà di potenze e logaritmi

> Le regole di calcolo per potenze $a^x$ e logaritmi $\log_a x$, il logaritmo essendo l'esponente da dare alla base per ottenere l'argomento.

## Definizione / enunciato
$$a^x=b\iff x=\log_a b .$$
In particolare $a^0=1\Rightarrow\log_a1=0$ e $a^1=a\Rightarrow\log_a a=1$; per ogni numero $c$ si ha $c=c\cdot1=c\log_a a=\log_a a^c$.

## Formule chiave
Dal formulario:
$$a^{x+y}=a^xa^y,\qquad a^{x-y}=\frac{a^x}{a^y},\qquad (a^x)^y=a^{xy},$$
$$\log_a(xy)=\log_a x+\log_a y,\qquad \log_a\frac xy=\log_a x-\log_a y\qquad\forall x,y>0,$$
$$\log_a(x^y)=y\log_a x\qquad\forall x>0,\ \forall y\in\mathbb R .$$

## Intuizione
Il logaritmo trasforma prodotti in somme e potenze in prodotti, perché è l'inverso dell'esponenziale, che trasforma somme di esponenti in prodotti. Ogni potenza si può scrivere in base $e$.

## Come si usa
Lezione 1, "vero o falso":
- n. 2: $\log(a+b)=\log a\cdot\log b$ è **falsa**. Le proprietà vere sono quelle sopra: il logaritmo di un prodotto (non di una somma) è la somma dei logaritmi.
- n. 4: $a^b=e^{b\log a}$ è **vera**. Applicando il logaritmo a entrambi i membri: $\log a^b=\log e^{b\log a}\Rightarrow b\log a=b\log a\cdot\log e=b\log a$.

Queste regole servono a scrivere il secondo membro di una disequazione come logaritmo nella stessa base e a tornare da $t=e^x$ a $x$.

## Nei corsi
- **Analisi 1** (triennale): prerequisito del corso ("Funzioni elementari e loro proprietà"). Fonti: `triennale/ANNO 1/analisi 1/formulario.pdf` (p. 1, "Formule notevoli"); `triennale/ANNO 1/analisi 1/2021.09.27 - Fiandaca_Lezione1.pdf` (lezione 1, pp. 9, 11-12).

## Prerequisiti
- Nessuno.

## Porta a
- [[Disequazioni logaritmiche]]: $c=\log_a a^c$ per passare agli argomenti
- [[Disequazioni esponenziali]]: ritorno a $x$ con il logaritmo
- [[Limiti notevoli]]: limiti di $a^x$, $\log_a x$ e forme $\frac{a^x-1}{x}$
- [[pH]]: logaritmo decimale cambiato di segno
- [[Equazione di Arrhenius]]: ln k lineare in 1/T

## Collegati
- Nessuno.
