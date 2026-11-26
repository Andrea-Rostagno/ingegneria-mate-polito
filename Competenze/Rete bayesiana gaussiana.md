---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["Gaussian Bayesian network", "DAG gaussiano", "Gaussian DAG", "matrice di precisione", "precision matrix", "concentration matrix", "invertire una catena gaussiana", "modello grafico gaussiano"]
tags: [competenza, area/statistica]
---

# Rete bayesiana gaussiana

> Una rete bayesiana in cui ogni nodo, dati i genitori, è normale con media lineare nei genitori e varianza costante: la congiunta è normale multivariata e le indipendenze condizionate si leggono negli zeri della matrice di precisione.

## Definizione / enunciato
Se in un DAG tutte le condizionate $f_{X_i\mid\mathrm{Pa}(X_i)}$ sono normali con media lineare nei genitori e varianza costante, il vettore $\mathbf X$ è normale multivariato: si può scrivere ogni nodo come combinazione lineare dei genitori più un rumore normale indipendente, e quindi $\mathbf X=\boldsymbol\mu+\mathbf A\mathbf Z$ (libro, cap. 7, §7.7). Con il teorema delle condizionate si passa da una fattorizzazione del DAG a un'altra della stessa congiunta.

## Formule chiave
**Zeri della matrice di precisione** (Prop. 7.18): se $\mathbf X\sim N_k(\boldsymbol\mu,\Sigma)$ con $\Sigma$ invertibile e $\mathbf K=\Sigma^{-1}$, per $i\ne j$
$$X_i\perp X_j\mid\{X_l:\ l\ne i,j\}\iff K_{ij}=0 .$$

## Intuizione
La covarianza misura la dipendenza marginale, la precisione quella "al netto di tutte le altre variabili". In una catena $X\to Y\to Z$ gli estremi sono correlati ($\Sigma_{13}\ne0$) ma condizionatamente indipendenti dato $Y$ ($K_{13}=0$).

## Come si usa
Procedura del libro per **invertire una catena** $X\to Y\to Z$ data da $X\sim N$, $Y\mid X=x\sim N(x,\cdot)$, $Z\mid Y=y\sim N(y,\cdot)$:
1. scrivere $X=Z_1$, $Y=X+\sigma_2Z_2$, $Z=Y+\sigma_3Z_3$ con $Z_i$ normali standard: la congiunta è normale, con $\Sigma=\mathbf A\mathbf A'$;
2. la catena implica $X\perp Z\mid Y$, quindi anche il DAG rovesciato $Z\to Y\to X$ è valido: $f(z)f(y\mid z)f(x\mid y)$;
3. ricavare $Z$ marginale e le condizionate $Y\mid Z$ e $X\mid Y$ con la formula della normale condizionata bivariata.
Lo stesso schema rovescia l'arco $D\to T$ dello screening nel caso discreto.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 7, §7.7 (Prop. 7.18, p. 121). Fonti: `Libri/Modelli statistici/capitoli/cap07.tex`; `magistrale/Modelli statistici/PDF corretti/251029.pdf`; `magistrale/Modelli statistici/251029 Normale multivariata.pdf`.

## Prerequisiti
- [[Rete bayesiana]]: fattorizzazione secondo un DAG
- [[Vettore gaussiano]]: la congiunta è normale
- [[Condizionamento di un vettore gaussiano]]: formule per le condizionate del DAG rovesciato

## Porta a
- [[Modello lineare a effetti misti]]: struttura gaussiana gerarchica con effetti casuali

## Collegati
- [[Indipendenza condizionata nelle reti bayesiane]]: catena e forchetta lette sulla precisione
- [[Matrice di covarianza]]: la sua inversa è la matrice di precisione
