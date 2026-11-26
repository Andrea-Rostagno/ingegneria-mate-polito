---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["continuous function", "continuità in un punto", "continuità da destra", "continuità da sinistra"]
tags: [competenza, area/analisi]
---

# Funzione continua

> $f$ è continua in un punto del dominio se il limite coincide con il valore; somme, prodotti, quozienti e composte di funzioni continue sono continue.

## Definizione / enunciato
Sia $x_0\in A=\operatorname{dom}f$ (Mazzi, def. 1.5 e 1.23). $f$ è **continua in $x_0$** se
$$\forall B(f(x_0))\ \exists B(x_0):\quad x\in B(x_0)\cap A\Rightarrow f(x)\in B(f(x_0)).$$
Rispetto al limite: $x_0$ deve stare nel dominio, non deve essere di accumulazione e non si esclude $x=x_0$. Quindi (prop. 1.2):
1. se $x_0$ è un punto isolato di $A$, $f$ è continua in $x_0$;
2. se $x_0$ è di accumulazione, $f$ è continua in $x_0$ se e solo se $\lim_{x\to x_0}f(x)=f(x_0)$.

**Continuità laterale** (def. 1.6): da destra se $\lim_{x\to x_0^+}f=f(x_0)$, da sinistra analogamente; $f$ è continua in $x_0$ se e solo se lo è da entrambe le parti (prop. 1.3). $f$ è continua su $I$ se lo è in ogni punto.

Somme, prodotti e quozienti (con denominatore non nullo) di funzioni continue sono continui (Mazzi cor. 1.5, 1.7, 1.9); la composta di continue è continua (cor. 1.11).

## Formule chiave
$$f\ \text{continua in }x_0\ (\text{di accumulazione})\iff\lim_{x\to x_0}f(x)=f(x_0)$$

## Intuizione
Il limite e il valore "si parlano": piccole variazioni di $x$ producono piccole variazioni di $f$. Nei punti isolati la condizione è vuota, per cui ogni successione è continua su $\mathbb N$.

## Come si usa
Per calcolare un limite in un punto del dominio di una funzione elementare basta sostituire. La parte intera $[x]$ è discontinua in ogni $n\in\mathbb Z$ ma continua da destra. Esercizi tipo: esercitazione 12 (2022-23, "funzioni continue"), es. 3 dell'esercitazione 14 (scegliere $\alpha$, $\beta$ perché una funzione definita a tratti sia continua e derivabile).

## Nei corsi
- **Analisi 1** (triennale): "definizione di continuità". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (§1.2, def. 1.5-1.6, prop. 1.2-1.3, p. 5; §1.15, def. 1.23, p. 48); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (def. 3.2.1-3.2.2, teor. 3.2.8-3.2.9); `triennale/ANNO 1/analisi 1/Esercitazioni 2022-23 (con svolti)/Esercitazione_12.pdf`.

## Prerequisiti
- [[Limite di funzione]]: continuità = limite uguale al valore
- [[Punto di accumulazione]]: nei punti isolati è automatica

## Porta a
- [[Punti di discontinuità]]: classifica dove fallisce
- [[Teorema degli zeri]]: ipotesi essenziale
- [[Teorema di Weierstrass]]: ipotesi
- [[Classi di funzioni integrabili]]: le continue sono integrabili
- [[Funzione integrale]]: F è continua
- [[Problema di Cauchy]]: ipotesi sui coefficienti

## Collegati
- [[Limite della funzione composta]]: composta di continue
- [[Derivata]]: derivabile implica continua
