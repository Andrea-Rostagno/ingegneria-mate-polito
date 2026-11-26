---
tipo: competenza
area: probabilita
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["Rényi representation", "Gamma normalizzate", "normalized Gamma", "simulazione della Dirichlet", "Renyi"]
tags: [competenza, area/probabilita]
---

# Rappresentazione di Rényi

> Gamma indipendenti con lo stesso tasso, divise per la loro somma, formano un vettore di Dirichlet indipendente dalla somma: è la costruzione e il modo standard di simulare la Dirichlet.

## Definizione / enunciato
Siano $X_1,\dots,X_D$ indipendenti, $X_i\sim\mathrm{Gamma}(\alpha_i,1)$, e $T=X_1+\dots+X_D$. Allora (libro, cap. 6, Teorema 6.3)
$$\mathbf P=\Bigl(\frac{X_1}T,\dots,\frac{X_D}T\Bigr)\sim\mathrm{Dir}(\alpha_1,\dots,\alpha_D),$$
inoltre $T\sim\mathrm{Gamma}(\alpha_0,1)$ e $T$ è indipendente da $\mathbf P$.

## Formule chiave
Dimostrazione con il cambio di variabili $(x_1,\dots,x_D)\mapsto(p_1,\dots,p_d,t)$, inversa $x_i=tp_i$ ($i\le d$), $x_D=t(1-\sum_{i\le d}p_i)$, jacobiano $t^{d}$ (sommando all'ultima riga le altre): la densità congiunta
$$\prod_{i=1}^D\frac{(p_it)^{\alpha_i-1}}{\Gamma(\alpha_i)}e^{-t}\,t^{d}=\frac{\Gamma(\alpha_0)}{\prod_i\Gamma(\alpha_i)}\prod_ip_i^{\alpha_i-1}\cdot\frac{t^{\alpha_0-1}e^{-t}}{\Gamma(\alpha_0)}$$
si fattorizza in una Dirichlet per $\mathbf p$ e una densità $\mathrm{Gamma}(\alpha_0,1)$ per $t$ (l'esponente di $t$ è $(\alpha_0-D)+d=\alpha_0-1$). Come sottoprodotto si ottiene l'integrale di Dirichlet, cioè la costante di normalizzazione.

## Intuizione
Le quote di un totale composto da pezzi Gamma non dicono nulla sul totale: è la generalizzazione a $D$ pezzi del risultato $X/(X+Y)\sim\mathrm{Beta}$ con $X,Y$ Gamma.

## Come si usa
- **Simulazione** in R base: `x <- rgamma(D, shape = alpha, rate = 1); p <- x / sum(x)`, ripetuto molte volte; la marginale simulata di $P_i$ si confronta con `dbeta(·, alpha_i, alpha_0 - alpha_i)`.
- Dimostra in poche righe aggregazione e marginali: la somma di Gamma indipendenti dello stesso tasso è Gamma con forma sommata.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 6, §6.2 (Teorema 6.3, p. 95). Fonti: `Libri/Modelli statistici/capitoli/cap06.tex`; `magistrale/Modelli statistici/251015B Dirichlet.pdf` (esercizio sulla rappresentazione di Rényi); codice `magistrale/Modelli statistici/codici/251023 Dirichlet (1).R`.

## Prerequisiti
- [[Distribuzione Gamma]]: le componenti da normalizzare
- [[Metodo dello jacobiano]]: cambio di variabili nella dimostrazione

## Porta a
- [[Distribuzione di Dirichlet]]: aggregazione e marginali come corollari

## Collegati
- [[Distribuzione Beta]]: caso $D=2$, $X/(X+Y)$
- [[Stick breaking]]: altra costruzione della Dirichlet
