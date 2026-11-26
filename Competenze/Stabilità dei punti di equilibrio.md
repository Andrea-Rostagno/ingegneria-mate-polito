---
tipo: competenza
area: analisi
corsi: [Matematica discreta, Matematica per l'AI]
livello: [triennale]
aliases: ["stability of equilibria of recurrences", "equilibrio stabile di una successione ricorsiva", "equilibrio attrattivo", "equilibrio asintoticamente stabile", "attrattivo globalmente", "teorema delle contrazioni", "contraction mapping theorem", "funzione lipschitziana", "criterio della derivata nel punto fisso"]
tags: [competenza, area/analisi]
---

# Stabilità dei punti di equilibrio

> Classifica i punti di equilibrio di $a_{n+1}=f(a_n)$ secondo il comportamento delle successioni che partono vicino a essi. Il criterio pratico è il valore di $|f'(x^*)|$; per le contrazioni la convergenza è globale.

## Definizione / enunciato
Sia $x^*=f(x^*)$ un punto di equilibrio di $a_{n+1}=f(a_n)$, $a_0=a\in\mathbb R$ (lezione 6, "cenno di teoria della stabilità").
1. $x^*$ è **stabile** se per ogni $\varepsilon>0$ esiste $\delta>0$ tale che $|a_0-x^*|<\delta$ implica $|a_n-x^*|<\varepsilon$ per ogni $n$.
2. $x^*$ è **attrattivo localmente** se esiste $R>0$ tale che $|a_0-x^*|<R$ implica $a_n\to x^*$.
   - 2'. $x^*$ è **attrattivo globalmente** se $a_n\to x^*$ per ogni $a_0\in\mathbb R$.
3. $x^*$ è **asintoticamente stabile** se valgono 1 e 2.

Per le equazioni ricorsive (2') implica (1). Invece (1) non implica (2), e (2) non implica (1) per i sistemi.

## Formule chiave
**Lipschitz.** $f$ è lipschitziana se $|f(x_1)-f(x_2)|\le L|x_1-x_2|$. È una contrazione se $L\le1$, una contrazione stretta se $L<1$. Se ha due punti fissi distinti, allora $L\ge1$.

**Teorema delle contrazioni.** Se $f:\mathbb R\to\mathbb R$ è lipschitziana con $L\in\,]0,1[$:
1. esiste un unico punto fisso $x_0$;
2. $x_0$ è globalmente attrattivo, e
$$|a_n-x_0|\le L^n\,|a_0-x_0|\quad\forall n.$$

**Teorema 3.** Sia $x_0=f(x_0)$. Se $|f'(x_0)|<1$, allora $x_0$ è localmente attrattivo. La lezione scrive "$f$ continua"; serve che $f$ sia derivabile in $x_0$.

**Teorema 4.** Se $f$ è $C^1$ in $]x_0-R,x_0+R[$ e $|f'(x_0)|>1$, nessuna successione $a_{n+1}=f(a_n)$ converge a $x_0$, salvo quelle che lo raggiungono, cioè con $a_n=x_0$ per $n\ge N$.

## Intuizione
Vicino all'equilibrio $f$ si comporta come la sua retta tangente, di pendenza $f'(x^*)$. Le distanze da $x^*$ vengono quindi moltiplicate circa per $|f'(x^*)|$ a ogni passo: si contraggono se è minore di 1 e si dilatano se è maggiore di 1.

## Come si usa
**Esercizio della lezione 6:** $a_{n+1}=-a_n+3$.
- L'unico equilibrio è $x^*=\frac32$.
- La soluzione è $a_n=A(-1)^n+\frac32$, con radice dell'omogenea $-1$ e particolare costante $\frac32$.
- Se $A\ne0$, $a_n$ oscilla fra $\frac32\pm A$ con $|a_0-\frac32|=|A|$ e non converge.
- Quindi $x^*$ è **stabile ma non attrattivo**. Qui $|f'|=1$ è il caso limite, escluso sia dal Teorema 3 sia dal Teorema 4.

## Nei corsi
- **Matematica discreta** (triennale): ultima parte della lezione 6 ("teoria della stabilità", "condizioni per l'esistenza dei punti fissi", funzioni lipschitziane, enunciati). Fonti: `triennale/ANNO 1/Matematica discreta/teoria/06 - Successioni ricorsive non lineari.pdf` (lezione 6, pp. 13-17, manoscritto). Non è nelle dispense di Tilli.
- **Matematica per l'AI** (triennale): definizioni della dispensa sui sistemi dinamici: $x^*$ è **attrattivo** se ha un intorno i cui punti tendono a $x^*$ ($f^n(x)\to x^*$), **repulsivo** se ciò accade per $f^{-n}=(f^{-1})^n$. Argomento: con $x=x^*+h$, attrarre richiede $|f(x^*+h)-f(x^*)|<|h|$, cioè $|f'(x^*)|<1$; lo stesso vale per i punti di un'orbita periodica di periodo $n$ usando $F^n$, la cui derivata è $\prod_iF'(x_i)$. Il logaritmo del modulo della derivata è l'esponente di Lyapunov. Fonti: `triennale/ANNO 3/matematica AI/IntroToDynamicalSystems (1).pdf` (p. 12, 15-17).

## Prerequisiti
- [[Punto di equilibrio di una successione ricorsiva]]: si classificano i punti fissi

## Porta a
- Nessuno nel corso.

## Collegati
- [[Metodo del punto fisso]]: stessa condizione di contrazione, usata per l'approssimazione numerica
- [[Relazioni ricorsive lineari del primo ordine]]: l'esempio $a_{n+1}=-a_n+3$ si risolve in forma esplicita
- [[Esponente di Lyapunov]]: $\lambda=\ln|f'(x^*)|$ misura il tasso di attrazione o repulsione (Matematica per l'AI)
