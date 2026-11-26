---
tipo: competenza
area: analisi
corsi: [Analisi 1, Algebra lineare]
livello: [triennale]
aliases: ["absolute value", "modulo", "disuguaglianza triangolare", "triangle inequality", "radice di x al quadrato"]
tags: [competenza, area/analisi]
---

# Valore assoluto

> Il modulo di una quantità ne restituisce la versione non negativa; soddisfa la disuguaglianza triangolare ed è il risultato di $\sqrt{x^2}$.

## Definizione / enunciato
$$|A(x)|=\begin{cases}A(x) & \text{se } A(x)\ge0\\ -[A(x)] & \text{se } A(x)<0\end{cases}$$
Il significato del modulo è rendere non negativo il suo argomento; l'argomento di un modulo può però essere nullo.

**Disuguaglianza triangolare** (prima disuguaglianza triangolare):
$$|a+b|\le|a|+|b| .$$

## Formule chiave
- $\sqrt{x^2}=|x|$.
- Radice $n$-esima: per $n$ **pari** $\sqrt[n]{a}=b\iff b^n=a$ con $a\ge0$, $b\ge0$; per $n$ **dispari** $\sqrt[n]{a}=b\iff b^n=a$ con $a,b\in\mathbb R$.

## Intuizione
Geometricamente il modulo è una lunghezza: in un triangolo ogni lato è minore della somma degli altri due, da cui $|a+b|\le|a|+|b|$ (lezione 1). Con radice pari la richiesta $b\ge0$ impone il modulo: $\sqrt{x^2}$ è $x$ solo se $x\ge0$.

## Come si usa
- Lezione 1, es. 1: semplificare $\sqrt{x^2}$. Essendo la radice pari ed essendo $x$ un'espressione letterale, serve il modulo per garantire la non negatività richiesta: $\sqrt{x^2}=|x|$.
- "Vero o falso" n. 5: $|a|+|b|\le|a+b|$ è **falsa**; controesempio $a=3$, $b=-2$: $3+2\le1$ non vale. La disuguaglianza vera è quella triangolare.
- Es. 9: $|x^2-8x+16|>0$ chiede il modulo strettamente positivo, quindi si escludono solo gli $x$ che annullano l'argomento: $(x-4)^2\ne0$, cioè $x\ne4$. Con $\ge0$ sarebbe vera $\forall x\in\mathbb R$.

## Nei corsi
- **Analisi 1** (triennale): richiami del test di ingresso. Fonti: `triennale/ANNO 1/analisi 1/2021.09.27 - Fiandaca_Lezione1.pdf` (lezione 1, pp. 1, 10, 12).
- **Algebra lineare** (triennale): il modulo di un vettore generalizza il valore assoluto e soddisfa la stessa disuguaglianza triangolare $\|\vec u+\vec v\|\le\|\vec u\|+\|\vec v\|$, dimostrata con Cauchy-Schwarz; le slide usano la doppia stanghetta per distinguerlo dal valore assoluto. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/1_Vettori.pdf` (p. 5, 38).
- **Analisi 1** (seconda passata, 2026-11-24): compare ovunque nella teoria dei limiti come distanza ($|x-x_0|<\delta$, $|a_n-\ell|<\varepsilon$), negli intorni, nel modulo dei complessi e nella stima $|\int f|\le\int|f|$. Lezione del 29/09/2021: definizione, $|x|$ come distanza da $0$ e $|x-y|$ come distanza tra $x$ e $y$, proprietà $|x|\ge0$ e $|x|=0\iff x=0$. Fonti: `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-09-29.pdf` (p. 1); `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Capitolo Preliminari.pdf` (def. 1.2, prop. 1.4, p. 16); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (prop. 1.5.23-1.5.24).

## Prerequisiti
- [[Assiomi dei numeri reali]]: definito confrontando con 0 tramite l'ordine

## Porta a
- [[Disequazioni con valore assoluto]]: si spezza il modulo nei due casi
- [[Punto di accumulazione]]: intorni come |x-x0|<r
- [[Trasformazioni del grafico]]: grafici di |f(x)| e f(|x|)
- [[Limite di successione]]: distanza |a_n-ℓ|
- [[Convergenza assoluta degli integrali impropri]]: |∫f|≤∫|f|

## Collegati
- [[Negazione dei quantificatori]]: controesempio $a=3$, $b=-2$ alla disuguaglianza rovesciata
- [[Disequazioni irrazionali]]: radici di indice pari e dispari
- [[Disuguaglianza di Cauchy-Schwarz]]: stessa disuguaglianza triangolare, nel caso vettoriale
- [[Numeri complessi]]: il modulo estende |x| al piano
- [[Punti di non derivabilità]]: |x| ha un punto angoloso
- [[Proprietà dell'integrale definito]]: |∫f|≤∫|f|
