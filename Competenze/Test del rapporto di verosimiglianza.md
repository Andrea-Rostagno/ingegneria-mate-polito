---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["likelihood ratio test", "LRT", "rapporto di verosimiglianza", "likelihood ratio", "lambda(x)", "test LR"]
tags: [competenza, area/statistica]
---

# Test del rapporto di verosimiglianza

> Si confronta il massimo della verosimiglianza sotto $H_0$ con il massimo su tutto $\Theta$: se il rapporto $\lambda(\mathbf x)$ è piccolo si rifiuta $H_0$. Costruisce regioni di rifiuto in modo automatico.

## Definizione / enunciato
**Rapporto di verosimiglianza**
$$\lambda(\mathbf x)=\frac{\sup_{\theta\in\Theta_0}L(\theta|\mathbf x)}{\sup_{\theta\in\Theta}L(\theta|\mathbf x)}\in[0,1]$$
(al denominatore $\Theta$, non $\Theta_0^c$). Il **test LR** ha regione di rifiuto $R(\mathbf x)=\{\mathbf x:\lambda(\mathbf x)\le c\}$, $0\le c\le1$, con $c$ scelto per avere livello $\alpha$.
**Teorema.** Se $T(\mathbf X)$ è sufficiente per $\theta$, il rapporto calcolato su $T$ coincide con quello su $\mathbf X$: $\lambda^*(T(\mathbf x))=\lambda(\mathbf x)$ (per la fattorizzazione $h(\mathbf x)$ si semplifica).

## Formule chiave
Campione $\mathcal N(\mu,\sigma^2)$, $H_0:\mu=\mu_0$:
- $\sigma^2$ noto: $\lambda(\mathbf x)=\exp\big(-\frac{n(\bar x-\mu_0)^2}{2\sigma^2}\big)$, quindi $R=\{|\bar x-\mu_0|\ge z_{\alpha/2}\sqrt{\sigma^2/n}\}$ (z-test).
- $\sigma^2$ ignoto: MLE vincolato $\hat\sigma_0^2=\frac1n\sum(x_i-\mu_0)^2$, $\lambda(\mathbf x)=\big(1+\frac{n(\bar x-\mu_0)^2}{\sum(x_i-\bar x)^2}\big)^{-n/2}$, quindi $R=\{|\bar x-\mu_0|\ge t_{n-1,\alpha/2}\sqrt{s^2/n}\}$ (t-test).
- $H_0:\sigma^2=\sigma_0^2$, $\mu$ ignoto: $\lambda$ dipende da $\hat\sigma^2/\sigma_0^2$; il livello esatto si trova solo numericamente, si approssima con code $\alpha/2$ del $\chi^2_{n-1}$ (chi-test).

## Intuizione
Se imporre $H_0$ fa crollare la verosimiglianza rispetto al suo massimo libero, i dati sono poco compatibili con $H_0$. I test LR sono UMP quando valgono le ipotesi di Neyman-Pearson o Karlin-Rubin.

## Come si usa
Poisson, $H_0:\lambda\le\lambda_0$: $\lambda(\mathbf x)=1$ se $\bar x\le\lambda_0$, altrimenti $e^{-n(\lambda_0-\bar x)}(\lambda_0/\bar x)^{n\bar x}$, decrescente in $\bar x$: $R=\{\sum x_i\ge c\}$. Con il numero di scoperte (dataset `discoveries`), $\lambda_0=2$, $\alpha=0.05$: $c=225$ esatto; con il TLC $n(\lambda_0+z_\alpha\sqrt{\lambda_0/n})=223.261$, molto vicino. Sonniferi: con $\sigma^2=10$ noto si accetta $H_0$, con $\sigma^2$ ignoto si rifiuta.

## Nei corsi
- **Prob e statistica** (triennale): slide sui test. Fonti: `triennale/ANNO 3/prob e statistica/statistica/Test d'Ipotesi e Intervalli di Confidenza lez6.pdf` (Rapporto di verosimiglianza IV-XXV).
- **Modelli statistici** (magistrale): per l'ipotesi lineare $\mathbf C\boldsymbol\beta=\boldsymbol\theta$ nel modello normale $\Lambda=(\mathrm{RSS}/\mathrm{RSS}_0)^{n/2}$ e $-2\log\Lambda=n\log(1+\frac q{n-p}F)$, crescente in $F$: LRT e test $F$ coincidono; per $n\to\infty$ $-2\log\Lambda\to\chi^2(q)$ (libro, cap. 12, Prop. 12.13; nel golf $21.07$ contro $qF=22.36$). Nei GLM il LRT è il **test della devianza**, $\Delta D\to\chi^2(p-q)$ (cap. 17, Teorema 17.10). Fonti: `Libri/Modelli statistici/capitoli/cap12.tex` (§12.7, p. 206), `cap17.tex`.

## Prerequisiti
- [[Funzione di verosimiglianza]]: massimi vincolato e libero
- [[Test d'ipotesi]]: regione di rifiuto e livello
- [[Teorema di fattorizzazione]]: riduzione alla statistica sufficiente
- [[Stimatore di massima verosimiglianza]]: i sup sono raggiunti negli MLE

## Porta a
- [[Test t di Student]]: LRT con varianza ignota
- [[Test chi-quadro sulla varianza]]: LRT sulla varianza
- [[Confronto di modelli annidati]]: equivalente al test $F$ nel modello lineare (Modelli statistici)
- [[Devianza di un GLM]]: LRT per modelli lineari generalizzati (Modelli statistici)

## Collegati
- [[Test uniformemente più potente]]: ottimalità sotto le ipotesi dei teoremi
- [[Test z sulla media]]: LRT con varianza nota
