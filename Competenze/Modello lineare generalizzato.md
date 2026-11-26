---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["generalized linear model", "GLM", "modelli lineari generalizzati", "funzione link", "link function", "link canonico", "canonical link", "predittore lineare", "linear predictor", "glm()"]
tags: [competenza, area/statistica]
---

# Modello lineare generalizzato

> Estensione del modello lineare a risposte binarie, di conteggio o comunque non normali: una distribuzione della famiglia esponenziale per la risposta, un predittore lineare e una funzione link che collega la media al predittore.

## Definizione / enunciato
Per osservazioni indipendenti $y_1,\dots,y_n$ un GLM ha tre componenti (libro, cap. 17, Def. 17.4):
1. **componente casuale**: $y_i$ nella famiglia esponenziale, $\mu_i=b'(\theta_i)$, $\operatorname{Var}(y_i)=b''(\theta_i)a(\phi_i)$;
2. **predittore lineare**: $\eta_i=\mathbf x_i'\boldsymbol\beta=\sum_{j=0}^{p-1}\beta_jx_{ij}$, $x_{i0}=1$;
3. **funzione link** $g$ monotona e derivabile: $g(\mu_i)=\eta_i=\mathbf x_i'\boldsymbol\beta$.
Il **link canonico** è quello con $g(\mu_i)=\theta_i$, cioè $\theta_i=\mathbf x_i'\boldsymbol\beta$ (Def. 17.5).

## Formule chiave
Casi: normale con link identità (il modello lineare), binomiale con link logit (regressione logistica), Poisson con link log (regressione di Poisson); tutti canonici.

## Intuizione
Il modello lineare applicato direttamente a probabilità o conteggi darebbe previsioni fuori da $[0,1]$ o negative; il link trasforma la media in una scala illimitata dove la linearità ha senso, e la famiglia esponenziale dà la giusta relazione tra media e varianza.

## Come si usa
In R `glm(y ~ x1 + x2, family = binomial)` o `family = poisson`; stima per massima verosimiglianza con Fisher scoring, inferenza con test di Wald e test della devianza, scelta dei modelli con devianza e AIC. Nel caso normale la devianza è $\mathrm{RSS}/\sigma^2$ e si ritorna al test $F$.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 17, §17.1-17.3 (Def. 17.4-17.5, p. 285); esercitazioni di M. Amongero con slide Amongero-Mastrantonio. Fonti: `Libri/Modelli statistici/capitoli/cap17.tex`; `magistrale/Modelli statistici/codici/251211 GLM.pdf`; `magistrale/Modelli statistici/codici/251218 GLM-Logit-Poisson.pdf` (scansione).

## Prerequisiti
- [[Famiglia esponenziale]]: componente casuale
- [[Regressione lineare]]: caso normale con link identità
- [[Stimatore di massima verosimiglianza]]: metodo di stima

## Porta a
- [[Fisher scoring]]: algoritmo di stima e inferenza asintotica
- [[Devianza di un GLM]]: bontà di adattamento e confronto di modelli
- [[Regressione logistica]]: risposta binaria
- [[Regressione di Poisson]]: risposta di conteggio

## Collegati
- [[Modello log-lineare]]: GLM di Poisson per tabelle di contingenza
- [[Sovradispersione]]: quando la varianza della famiglia scelta è troppo piccola
