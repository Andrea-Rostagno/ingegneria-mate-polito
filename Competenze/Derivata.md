---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["derivative", "funzione derivabile", "differenziabilità", "rapporto incrementale", "retta tangente", "prima formula dell'incremento finito"]
tags: [competenza, area/analisi]
---

# Derivata

> La derivata in $x_0$ è il limite del rapporto incrementale, cioè la pendenza della retta tangente; equivale a scrivere $f(x)=f(x_0)+f'(x_0)(x-x_0)+o(x-x_0)$.

## Definizione / enunciato
Sia $x_0$ interno a $A=\operatorname{dom}f$. $f$ è **differenziabile** (derivabile) in $x_0$ se esistono $\alpha\in\mathbb R$ e un intorno $B(x_0)\subseteq A$ tali che (Mazzi, def. 1.1)
$$f(x)=f(x_0)+\alpha(x-x_0)+o(x-x_0)\qquad(x\to x_0).$$
$\alpha=f'(x_0)=\frac{df}{dx}(x_0)$ è la **derivata**. Equivalentemente (prop. 1.1) esiste finito il limite del **rapporto incrementale**
$$f'(x_0)=\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}h .$$
La retta $y=f(x_0)+f'(x_0)(x-x_0)$ è la **retta tangente** al grafico in $(x_0,f(x_0))$ (def. 1.2).

**Prop. 1.2.** Se $f$ è derivabile in $x_0$, allora è continua in $x_0$. Il viceversa è falso ($|x|$ in $0$).

## Formule chiave
$$f(x_0+h)=f(x_0)+f'(x_0)h+o(h)\quad\text{(prima formula dell'incremento finito)}$$

## Intuizione
Geometricamente il rapporto incrementale è la pendenza della secante; la derivata è la pendenza limite, cioè della retta che approssima il grafico meglio di ogni altra: l'errore è $o(x-x_0)$. Fisicamente è la velocità istantanea.

## Come si usa
Si calcola dalla definizione nei casi dubbi (punti di raccordo di funzioni definite a tratti, punti in cui le regole non si applicano), altrimenti con le regole di derivazione. Mazzi (es. 1.1) ricava così le derivate delle funzioni elementari, a partire da $f(x)=k\Rightarrow f'(x_0)=0$. La contronominale della prop. 1.2 è utile: se $f$ non è continua in $x_0$ non è derivabile. Esercizi tipo: esercitazione 13 (2022-23, "calcolo di derivate").

## Nei corsi
- **Analisi 1** (triennale): "definizione di derivata, significato geometrico e fisico; prima formula dell'incremento finito e legame fra derivabilità e continuità". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/calcolo differenziale corretto.pdf` (§1.1, def. 1.1-1.3, prop. 1.1-1.2, pp. 1-5); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (§4.1, teor. 4.1.6, PDF pp. 114-118).

## Prerequisiti
- [[Simboli di Landau]]: f(x0)+α(x-x0)+o(x-x0)
- [[Limite di funzione]]: limite del rapporto incrementale

## Porta a
- [[Punti di non derivabilità]]: fallisce il limite del rapporto
- [[Derivata della funzione inversa]]: rapporto incrementale capovolto
- [[Teorema di Fermat]]: segno del rapporto incrementale
- [[Funzione convessa]]: posizione rispetto alla tangente
- [[Problema di Cauchy]]: la soluzione è derivabile
- [[Regole di derivazione]]: definizione di derivata
- [[Derivate delle funzioni elementari]]: si calcolano dal rapporto incrementale
- [[Velocità e accelerazione]]: velocità e accelerazione sono derivate temporali della posizione

## Collegati
- [[Funzione continua]]: derivabile implica continua
- [[Velocità e accelerazione]]: significato fisico della derivata (velocità istantanea)
