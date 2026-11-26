---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra, Matematica discreta]
livello: [triennale]
aliases: ["Cantor-Schröder-Bernstein theorem", "Schröder-Bernstein theorem", "teorema di Schröder-Bernstein", "Cantor-Schroeder-Bernstein", "teorema di Cantor-Bernstein", "confronto di cardinalità"]
tags: [competenza, area/algebra-geometria]
---

# Teorema di Cantor-Schröder-Bernstein

> Se ciascuno di due insiemi si inietta nell'altro, allora i due insiemi sono equipotenti. Permette di dimostrare una biiezione costruendo solo due iniezioni.

## Definizione / enunciato
**Teorema 2.** Siano $X$ e $Y$ insiemi. Se esistono applicazioni iniettive $f:X\to Y$ e $g:Y\to X$, allora $X\approx Y$, cioè esiste una biiezione $X\to Y$.

## Formule chiave
$$\exists\,f:X\hookrightarrow Y,\ \exists\,g:Y\hookrightarrow X\ \Longrightarrow\ X\approx Y$$

## Intuizione
"$X$ non è più grande di $Y$" e "$Y$ non è più grande di $X$" implicano "hanno la stessa grandezza". È l'antisimmetria del confronto tra cardinalità, e non è ovvia: le due iniezioni date possono non essere biiettive.

## Come si usa
- **Cor. 3:** se $Y\subseteq X\approx\mathbb N$ e $Y$ è infinito, l'inclusione composta con la biiezione dà $Y\hookrightarrow\mathbb N$. Inoltre esiste $\mathbb N\hookrightarrow Y$ perché $Y$ è infinito. Per il teorema, $Y\approx\mathbb N$.
- **$\mathbb Q$ numerabile:** basta l'iniezione $p/q\mapsto2^p3^q$ di $\mathbb Q_+$ in $\mathbb N$ e l'inclusione $\mathbb N\subseteq\mathbb Q_+$.

Le dispense enunciano il teorema senza riportarne la dimostrazione.

## Nei corsi
- **Istituzioni algebra** (triennale): lezione 3, nella parte sulla numerabilità. Fonti: `triennale/ANNO 2/istituzioni/Alg-03-10-22.pdf` (lezione 3, p. 17).
- **Matematica discreta** (triennale): "teorema di Cantor-Bernstein", lezione 3. Si definisce $|A|\le|B|$ se esiste $f:A\to B$ iniettiva. Se $A\subseteq B$ allora $|A|\le|B|$ (basta l'inclusione $\mathrm{id}_A$). La relazione è transitiva, perché la composizione di iniezioni è iniettiva. Se $A\sim B$ valgono $|A|\le|B|$ e $|B|\le|A|$. Il teorema dà il viceversa, quindi $\le$ è riflessiva, transitiva e antisimmetrica: è una relazione d'ordine parziale fra cardinalità. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/03 -Insiemi equipotenti e cardinalitá.pdf` (lezione 3, pp. 7-8, manoscritto).

## Prerequisiti
- [[Funzioni iniettive e suriettive]]: ipotesi e tesi sono su iniettività e biiettività

## Porta a
- [[Insieme numerabile]]: i sottoinsiemi infiniti di un numerabile sono numerabili

## Collegati
- [[Relazione di equivalenza]]: l'equipotenza è una relazione d'equivalenza (`Alg-28-09-22.pdf` p. 14)
- [[Insieme parzialmente ordinato]]: il teorema è l'antisimmetria del confronto "si inietta in"
- [[Cardinalità di un insieme finito]]: il confronto $|A|\le|B|$ estende agli insiemi infiniti l'ordine fra cardinalità finite (Matematica discreta)
