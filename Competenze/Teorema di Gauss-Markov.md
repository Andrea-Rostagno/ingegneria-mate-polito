---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["Gauss-Markov theorem", "BLUE", "best linear unbiased estimator", "stimatore lineare corretto ottimo", "ottimalità dei minimi quadrati"]
tags: [competenza, area/statistica]
---

# Teorema di Gauss-Markov

> Tra tutti gli stimatori lineari e non distorti di $\boldsymbol\beta$, quello dei minimi quadrati ha la varianza più piccola, anche senza ipotesi di normalità.

## Definizione / enunciato
Nel modello lineare con le ipotesi (M1)-(M4) (matrice di disegno nota di rango $p$, $\mathbb E(\boldsymbol\varepsilon)=\mathbf 0$, $\operatorname{VarCov}(\boldsymbol\varepsilon)=\sigma^2\mathbf I_n$; la normalità (M5) non serve), sia $\tilde{\boldsymbol\beta}=\mathbf C\mathbf Y$ un qualsiasi stimatore lineare corretto ($\mathbf C$ fissata $p\times n$, $\mathbb E(\tilde{\boldsymbol\beta})=\boldsymbol\beta$ per ogni $\boldsymbol\beta$). Allora (libro, cap. 9, Teorema 9.14)
$$\operatorname{VarCov}(\tilde{\boldsymbol\beta})-\operatorname{VarCov}(\hat{\boldsymbol\beta})\ \text{è semidefinita positiva},$$
e per ogni $\mathbf c$, $\operatorname{Var}(\mathbf c'\tilde{\boldsymbol\beta})\ge\operatorname{Var}(\mathbf c'\hat{\boldsymbol\beta})$: lo stimatore dei minimi quadrati è **BLUE**.

## Formule chiave
$\operatorname{VarCov}(\hat{\boldsymbol\beta})=\sigma^2(\mathbf X'\mathbf X)^{-1}$; la correttezza di $\mathbf C\mathbf Y$ per ogni $\boldsymbol\beta$ equivale a $\mathbf C\mathbf X=\mathbf I_p$. Scrivendo $\mathbf C=(\mathbf X'\mathbf X)^{-1}\mathbf X'+\mathbf D$ con $\mathbf D\mathbf X=\mathbf 0$ i termini incrociati si annullano ($\mathbf A\mathbf D'=(\mathbf X'\mathbf X)^{-1}(\mathbf D\mathbf X)'=\mathbf 0$) e $\operatorname{VarCov}(\tilde{\boldsymbol\beta})=\sigma^2(\mathbf X'\mathbf X)^{-1}+\sigma^2\mathbf D\mathbf D'$, con $\mathbf c'\mathbf D\mathbf D'\mathbf c=\|\mathbf D'\mathbf c\|^2\ge0$. Con la normalità $\hat{\boldsymbol\beta}$ è ottimo tra tutti gli stimatori corretti (via Cramér-Rao, non dimostrato nel libro).

## Intuizione
L'ottimalità riguarda solo stimatori lineari e corretti, e regge sulle sole ipotesi del secondo ordine. Con errori eteroschedastici o correlati il risultato vale per il modello trasformato, cioè per lo stimatore GLS.

## Come si usa
Giustifica l'uso dei minimi quadrati quando la normalità è dubbia; un caso particolare è la media campionaria, stimatore lineare corretto di varianza minima della media (esercizio del libro). È una sezione di approfondimento nel libro.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 9, §9.7 (Teorema 9.14, p. 159), sezione facoltativa. Fonti: `Libri/Modelli statistici/capitoli/cap09.tex`.

## Prerequisiti
- [[Regressione lineare]]: ipotesi (M1)-(M4)
- [[Matrice di covarianza]]: confronto tra matrici di varianze

## Porta a
- [[Minimi quadrati generalizzati]]: ottimalità nel modello con $\operatorname{VarCov}=\sigma^2\mathbf V$

## Collegati
- [[Disuguaglianza di Cramér-Rao]]: altro limite inferiore per la varianza, su stimatori non necessariamente lineari
- [[Errore quadratico medio]]: per stimatori corretti coincide con la varianza
